import { ageGroup } from '#lib/engine/util';
import type { CharacterState, FeedEntry } from '#lib/types';

const STAGE_LABEL = {
	infant: '誕生・乳児期',
	child: '子ども時代',
	youth: '青年期',
	adult: '壮年期',
	elder: '晩年'
} as const;

export type LifeTimelineRow = {
	kind: 'life' | 'world';
	key: string;
	year: number;
	age: number;
	type: FeedEntry['type'] | 'world';
	text: string;
	sub?: string;
	tag?: string;
	major: boolean;
};
export type LifeTimelineItem = LifeTimelineRow | { kind: 'stage'; key: string; label: string };


/** Newest-first personal feed + oldest-first chronicle become one stable chronological sequence. */
export function buildLifeTimelineRows(c: Pick<CharacterState, 'feed' | 'chronicle'>): LifeTimelineRow[] {
	const life = [...c.feed].reverse().map<LifeTimelineRow>((f) => ({
		kind: 'life',
		key: `l-${f.id}`,
		year: f.year,
		age: f.age,
		type: f.type,
		text: f.text,
		sub: f.fact ? `資料 ${f.fact}` : undefined,
		major: f.type !== 'normal'
	}));
	const world = c.chronicle.map<LifeTimelineRow>((ev) => ({
		kind: 'world',
		key: `w-${ev.id}`,
		year: ev.year,
		age: ev.age,
		type: 'world',
		text: ev.title,
		sub: ev.description,
		tag: ev.regionTag,
		major: true
	}));
	return [...world, ...life].sort((a, b) =>
		a.year !== b.year ? a.year - b.year : a.kind === b.kind ? 0 : a.kind === 'world' ? -1 : 1
	);
}

export function groupLifeTimeline(rows: readonly LifeTimelineRow[], showAll: boolean): LifeTimelineItem[] {
	const out: LifeTimelineItem[] = [];
	let stage: ReturnType<typeof ageGroup> | null = null;
	for (const r of rows) {
		if (!showAll && !r.major) continue;
		const g = ageGroup(r.age);
		if (g !== stage) {
			stage = g;
			out.push({ kind: 'stage', key: `s-${g}`, label: STAGE_LABEL[g] });
		}
		out.push(r);
	}
	return out;
}
