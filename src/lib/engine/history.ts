import type { SimulationWorld } from '#lib/engine/world';
import type { CharacterState, ChronicleTopic, PostMortemEvent } from '#lib/types';
import { pick, type Rng } from '#lib/engine/util';

export const chronicleTick = (c: CharacterState, rng: Rng, force: boolean, world: SimulationWorld): void => {
	const usedTitles = new Set(c.chronicle.map((x) => x.title));
	const exact = world.timeline.find((e) => e.year === c.currentYear && !usedTitles.has(e.title));
	if (exact) {
		c.chronicle.push({
			id: `ch-${c.chronicle.length}-${c.age}`,
			year: c.currentYear,
			age: c.age,
			regionTag: exact.category === 'science' ? '科学・技術' : '世界史',
			title: exact.title,
			description: exact.description
		});
		return;
	}
	if (!force && rng() >= 0.3) return;
	const inRange = (x: ChronicleTopic): boolean => !x.yearRange || (c.currentYear >= x.yearRange[0] && c.currentYear <= x.yearRange[1]);
	const pool = (world.chronicles[c.environment.era.id] ?? []).filter((x) => !usedTitles.has(x.title) && inRange(x));
	if (pool.length === 0) return;
	const item = pick(pool, rng);
	c.chronicle.push({
		id: `ch-${c.chronicle.length}-${c.age}`,
		year: c.currentYear,
		age: c.age,
		regionTag: item.regionTag,
		title: item.title,
		description: item.description
	});
};

export interface PostMortem {
	events: PostMortemEvent[];
	belief?: { belief: string; overturned: string };
}

export const postMortem = (c: CharacterState, world: SimulationWorld): PostMortem => {
	const after = world.timeline.filter((e) => e.year > c.currentYear).sort((a, b) => a.year - b.year);
	const near = after.slice(0, 3);
	const science = after.filter((e) => e.category === 'science' && !near.includes(e)).slice(0, 1);
	const events = [...near, ...science]
		.sort((a, b) => a.year - b.year)
		.map((e) => ({ ...e, yearsAfterDeath: e.year - c.currentYear }));
	const b = world.beliefs.find((x) => c.currentYear <= x.until);
	return { events, belief: b ? { belief: b.belief, overturned: b.overturned } : undefined };
};
