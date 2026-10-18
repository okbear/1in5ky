const browser = typeof window !== 'undefined';

import { SEED_MEMORIALS } from './data/timeline';
import { postMortem, resolveChoice, rollBirth, stepYear, type PostMortem } from './engine/engine';
import { formatYear } from './engine/util';
import type {
	CharacterState,
	ChoiceOption,
	DecisionEvent,
	MemorialRecord
} from './types';

export type Phase = 'intro' | 'cert' | 'life' | 'dead';

const MEMORIAL_KEY = '1in5ky.memorials';
const MS_PER_YEAR = 2500;

const loadMemorials = (): MemorialRecord[] => {
	if (!browser) return [];
	try {
		const raw = localStorage.getItem(MEMORIAL_KEY);
		return raw ? (JSON.parse(raw) as MemorialRecord[]) : [];
	} catch {
		return [];
	}
};

class Game {
	phase = $state<Phase>('intro');
	speed = $state(1);
	paused = $state(false);
	char = $state<CharacterState | null>(null);
	decision = $state<DecisionEvent | null>(null);
	pm = $state<PostMortem | null>(null);
	memorials = $state<MemorialRecord[]>(loadMemorials());

	#timer: number | undefined;

	get blocked(): boolean {
		return this.paused || this.decision !== null;
	}

	get allMemorials(): MemorialRecord[] {
		return [...this.memorials, ...SEED_MEMORIALS];
	}

	roll(): void {
		this.stop();
		this.char = rollBirth();
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
		if (!c || this.phase !== 'life') return;
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
	}

	finish(): void {
		this.stop();
		const c = this.char;
		if (!c) return;
		this.pm = postMortem(c);
		this.saveMemorial(c);
		this.phase = 'dead';
	}

	saveMemorial(c: CharacterState): void {
		const rec: MemorialRecord = {
			id: c.id,
			name: c.name,
			sex: c.sex,
			eraId: c.era.id,
			eraName: c.era.name,
			regionName: c.region.name,
			place: c.place,
			birthYear: c.birthYear,
			deathYear: c.currentYear,
			deathAge: c.age,
			socialClass: c.socialClass.name,
			occupation: c.occupation,
			deathCause: c.ongoing ? '（まだ生きている）' : (c.deathCause ?? ''),
			epitaph: c.epitaph || `${c.name}の人生は、${formatYear(c.currentYear)}も続いている。`,
			summaryLine: `${c.region.name}の${c.socialClass.name}、${c.age}歳`,
			candles: 0,
			isPlayer: true,
			createdAt: Date.now()
		};
		this.memorials = [rec, ...this.memorials].slice(0, 200);
		if (browser) localStorage.setItem(MEMORIAL_KEY, JSON.stringify(this.memorials));
	}

	clearMemorials(): void {
		this.memorials = [];
		if (browser) localStorage.removeItem(MEMORIAL_KEY);
	}
}

export const game = new Game();
