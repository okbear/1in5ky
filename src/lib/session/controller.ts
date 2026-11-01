import type { PostMortem } from '#lib/engine/history';
import type { LoadedBirth, Simulation } from '#lib/engine/world';
import { MAX_MEMORIALS, MEMORIAL_KEY, parseMemorials, toMemorialRecord } from '#lib/engine/memorials';
import { SEED_MEMORIALS } from '#lib/data/seeds';
import type { CharacterState, ChoiceOption, DecisionEvent, EraId, MemorialRecord } from '#lib/types';
import type { Rng } from '#lib/engine/util';

export type Phase = 'intro' | 'cert' | 'life' | 'dead';
export const PLAYBACK_SPEEDS = [1, 2, 4, 8, 16] as const;
const MS_PER_YEAR = 2500;

export interface SessionState {
	phase: Phase;
	loading: boolean;
	loadError: string | null;
	speed: number;
	paused: boolean;
	char: CharacterState | null;
	decision: DecisionEvent | null;
	decisionHidden: boolean;
	pm: PostMortem | null;
	memorials: MemorialRecord[];
}

export const createSessionState = (): SessionState => ({
	phase: 'intro', loading: false, loadError: null, speed: 1, paused: false, char: null,
	decision: null, decisionHidden: false, pm: null, memorials: []
});

export interface SessionRuntime {
	rng: Rng;
	loadBirth: (rng: Rng, forceEra?: EraId) => LoadedBirth | Promise<LoadedBirth>;
	/** Return a cancellation function; the controller owns at most one pending callback. */
	schedule: (callback: () => void, delayMs: number) => () => void;
	storage?: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
}

/** Session transitions and effects, independent of Svelte and browser globals. */
export class SessionController {
	#cancelTimer: (() => void) | undefined;
	#hydrated = false;
	#loadGeneration = 0;
	#simulation: Simulation | null = null;

	constructor(private readonly state: SessionState, private readonly runtime: SessionRuntime) {}

	get phase() { return this.state.phase; }
	get loading() { return this.state.loading; }
	get loadError() { return this.state.loadError; }
	get speed() { return this.state.speed; }
	get paused() { return this.state.paused; }
	get char() { return this.state.char; }
	get decision() { return this.state.decision; }
	get decisionHidden() { return this.state.decisionHidden; }
	get pm() { return this.state.pm; }
	get memorials() { return this.state.memorials; }
	get blocked(): boolean { return this.loading || this.paused || this.decision !== null; }
	get allMemorials(): MemorialRecord[] { return [...this.memorials, ...SEED_MEMORIALS]; }

	hydrate(): void {
		if (this.#hydrated) return;
		this.#hydrated = true;
		try {
			this.state.memorials = parseMemorials(this.runtime.storage?.getItem(MEMORIAL_KEY) ?? null);
		} catch {
			this.state.memorials = [];
		}
	}

	async roll(forceEra?: EraId): Promise<void> {
		if (this.loading) return;
		const generation = ++this.#loadGeneration;
		this.stop();
		this.clearDecision();
		this.state.loading = true;
		this.state.loadError = null;
		try {
			const loaded = await this.runtime.loadBirth(this.runtime.rng, forceEra);
			if (generation !== this.#loadGeneration) return;
			this.#simulation = loaded.simulation;
			this.state.char = loaded.character;
			this.state.pm = null;
			this.state.speed = 1;
			this.state.paused = false;
			this.state.phase = 'cert';
		} catch {
			if (generation === this.#loadGeneration) this.state.loadError = '時代のデータを読み込めませんでした。再読み込みしてやり直してください。';
		} finally {
			if (generation === this.#loadGeneration) this.state.loading = false;
		}
	}

	begin(): void {
		if (this.loading || this.phase !== 'cert' || !this.char?.alive) return;
		this.state.phase = 'life';
		this.schedule();
	}

	quit(): void {
		this.#loadGeneration++;
		this.state.loading = false;
		this.state.loadError = null;
		this.#simulation = null;
		this.stop();
		this.clearDecision();
		this.state.pm = null;
		this.state.phase = 'intro';
		this.state.char = null;
	}

	schedule(): void {
		this.stop();
		if (this.phase !== 'life' || !this.char?.alive || this.blocked) return;
		this.#cancelTimer = this.runtime.schedule(() => this.tick(), MS_PER_YEAR / this.speed);
	}

	stop(): void {
		this.#cancelTimer?.();
		this.#cancelTimer = undefined;
	}

	tick(): void {
		if (this.advance()) this.schedule();
	}

	choose(choice: ChoiceOption): void {
		const c = this.char;
		const decision = this.decision;
		// Only the active decision owns valid choices; reject stale or fabricated effects.
		if (!this.#simulation || this.loading || this.phase !== 'life' || !c?.alive || !decision || !decision.choices.includes(choice)) return;
		const result = this.#simulation.resolveChoice(c, choice, this.runtime.rng);
		this.clearDecision();
		if (result.died) this.finish();
		else this.schedule();
	}

	dismissDecision(): void {
		if (this.decision) this.state.decisionHidden = true;
	}

	restoreDecision(): void {
		if (this.decision) this.state.decisionHidden = false;
	}

	togglePause(): void {
		if (this.phase !== 'life') return;
		this.state.paused = !this.paused;
		this.schedule();
	}

	setSpeed(speed: number): void {
		if (!PLAYBACK_SPEEDS.some((allowed) => allowed === speed)) return;
		this.state.speed = speed;
		this.schedule();
	}

	fastForward(): void {
		if (this.phase !== 'life' || !this.char?.alive || this.decision) return;
		this.state.paused = false;
		this.stop();
		for (let i = 0; i < 120; i++) {
			if (!this.advance()) return;
		}
		this.schedule();
	}

	revive(): void {
		if (this.loading) return;
		const c = this.char;
		if (!c || this.phase !== 'dead' || !this.#simulation?.revive(c)) return;
		this.state.pm = null;
		this.clearDecision();
		this.state.paused = false;
		this.state.phase = 'life';
		this.schedule();
	}

	clearMemorials(): void {
		this.state.memorials = [];
		try {
			this.runtime.storage?.removeItem(MEMORIAL_KEY);
		} catch {
			// Storage restrictions must not prevent playing.
		}
	}

	private clearDecision(): void {
		this.state.decision = null;
		this.state.decisionHidden = false;
	}

	/** Both timed playback and fast-forward use this single annual transition. */
	private advance(): boolean {
		const c = this.char;
		if (!this.#simulation || this.phase !== 'life' || !c?.alive || this.blocked) return false;
		this.stop();
		const result = this.#simulation.stepYear(c, this.runtime.rng);
		if (result.ended) {
			this.finish();
			return false;
		}
		if (result.decision) {
			this.state.decision = result.decision;
			this.state.decisionHidden = false;
			return false;
		}
		return true;
	}

	private finish(): void {
		this.stop();
		this.clearDecision();
		const c = this.char;
		if (!c || c.alive) return;
		this.state.pm = this.#simulation!.postMortem(c);
		this.state.memorials = [toMemorialRecord(c), ...this.memorials.filter((m) => m.id !== c.id)].slice(0, MAX_MEMORIALS);
		try {
			this.runtime.storage?.setItem(MEMORIAL_KEY, JSON.stringify(this.memorials));
		} catch {
			// Ignore storage quota or privacy-mode restrictions.
		}
		this.state.phase = 'dead';
	}
}
