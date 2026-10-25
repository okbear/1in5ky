const browser = typeof window !== 'undefined';

import { SEED_MEMORIALS } from './data/timeline';
import { postMortem, resolveChoice, rollBirth, stepYear, type PostMortem } from './engine/engine';
import { MAX_MEMORIALS, MEMORIAL_KEY, parseMemorials, toMemorialRecord } from './engine/memorials';
import type {
	CharacterState,
	ChoiceOption,
	DecisionEvent,
	EraId,
	MemorialRecord
} from './types';

export type Phase = 'intro' | 'cert' | 'life' | 'dead';

const MS_PER_YEAR = 2500;

class Game {
	phase = $state<Phase>('intro');
	speed = $state(1);
	paused = $state(false);
	char = $state<CharacterState | null>(null);
	decision = $state<DecisionEvent | null>(null);
	pm = $state<PostMortem | null>(null);
	memorials = $state<MemorialRecord[]>([]);

	#timer: number | undefined;
	#hydrated = false;

	hydrate(): void {
		if (!browser || this.#hydrated) return;
		this.#hydrated = true;
		try {
			this.memorials = parseMemorials(localStorage.getItem(MEMORIAL_KEY));
		} catch {
			this.memorials = [];
		}
	}
	get blocked(): boolean {
		return this.paused || this.decision !== null;
	}

	get allMemorials(): MemorialRecord[] {
		return [...this.memorials, ...SEED_MEMORIALS];
	}

	roll(forceEra?: EraId): void {
		this.stop();
		this.char = rollBirth(Math.random, forceEra);
		this.decision = null;
		this.pm = null;
		this.speed = 1;
		this.paused = false;
		this.phase = 'cert';
	}

	begin(): void {
		this.phase = 'life';
		this.schedule();
	}

	quit(): void {
		this.stop();
		this.decision = null;
		this.phase = 'intro';
		this.char = null;
	}

	schedule(): void {
		this.stop();
		this.#timer = window.setTimeout(() => this.tick(), MS_PER_YEAR / this.speed);
	}

	stop(): void {
		clearTimeout(this.#timer);
		this.#timer = undefined;
	}

	tick(): void {
		const c = this.char;
		if (!c || this.phase !== 'life') return;
		if (this.blocked) return;
		const r = stepYear(c);
		if (r.ended) return this.finish();
		if (r.decision) {
			this.decision = r.decision;
			return;
		}
		this.schedule();
	}

	choose(choice: ChoiceOption): void {
		const c = this.char;
		if (!c) return;
		const res = resolveChoice(c, choice);
		this.decision = null;
		if (res.died) return this.finish();
		this.schedule();
	}

	togglePause(): void {
		this.paused = !this.paused;
		if (this.paused) this.stop();
		else if (!this.blocked) this.schedule();
	}

	setSpeed(s: number): void {
		this.speed = s;
		if (!this.blocked && this.phase === 'life') this.schedule();
	}

	fastForward(): void {
		const c = this.char;
		if (!c || this.phase !== 'life' || this.decision) return;
		this.paused = false;
		this.stop();
		for (let i = 0; i < 120; i++) {
			const r = stepYear(c);
			if (r.ended) return this.finish();
			if (r.decision) {
				this.decision = r.decision;
				return;
			}
		}
		if (!this.blocked && this.phase === 'life') this.schedule();
	}

	finish(): void {
		this.stop();
		this.decision = null;
		const c = this.char;
		if (!c) return;
		this.pm = postMortem(c);
		this.saveMemorial(c);
		this.phase = 'dead';
	}

	saveMemorial(c: CharacterState): void {
		this.memorials = [toMemorialRecord(c), ...this.memorials].slice(0, MAX_MEMORIALS);
		if (browser) {
			try {
				localStorage.setItem(MEMORIAL_KEY, JSON.stringify(this.memorials));
			} catch {
				// Ignore storage quota or privacy-mode restrictions
			}
		}
	}

	clearMemorials(): void {
		this.memorials = [];
		if (browser) {
			try {
				localStorage.removeItem(MEMORIAL_KEY);
			} catch {
				// Ignore storage restrictions
			}
		}
	}
}

export const game = new Game();
