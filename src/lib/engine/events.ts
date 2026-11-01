import type { CharacterState, DecisionEvent } from '#lib/types';
import { pushFeed } from '#lib/engine/character';
import { matchesEventSetting } from '#lib/engine/eventScope';
import { formatYear, weighted, type Rng } from '#lib/engine/util';

export const isEventEligible = (c: CharacterState, e: DecisionEvent): boolean => {
	if (!e.repeatable && c.triggeredEventIds.includes(e.id)) return false;
	if (e.repeatable) {
		const cooldown = e.cooldownYears ?? 4;
		for (let a = c.age - cooldown; a <= c.age; a++) {
			if (c.triggeredEventIds.includes(`${e.id}@${a}`)) return false;
		}
	}
	if (c.age < e.minAge || c.age > e.maxAge) return false;
	if (!matchesEventSetting({ ...c.environment, place: c.place, currentYear: c.currentYear }, e)) return false;
	if (e.classIds && !e.classIds.includes(c.environment.socialClass.id)) return false;
	if (e.sex && e.sex !== c.sex) return false;
	if (e.isUrban !== undefined && e.isUrban !== c.isUrban) return false;
	if (e.requiresSpouse && !c.family.some((f) => (f.relation === '妻' || f.relation === '夫') && f.status === 'alive')) return false;
	if (e.requiresUnmarried && c.family.some((f) => (f.relation === '妻' || f.relation === '夫') && f.status === 'alive')) return false;
	if (e.maxChildren !== undefined && c.family.filter((f) => f.relation === '子').length >= e.maxChildren) return false;
	return true;
};


export const selectDecision = (c: CharacterState, rng: Rng, events: readonly DecisionEvent[]): DecisionEvent | undefined => {
	// 1. 歴史の大波（確定年代イベントは高確率、時代共通イベントは適度な確率で発生）
	const wave = events.find(
		(e) => e.isHistoricalWave && isEventEligible(c, e) && (e.yearRange ? rng() < 0.8 : rng() < 0.14)
	);
	if (wave) {
		c.triggeredEventIds.push(wave.id, `${wave.id}@${c.age}`);
		pushFeed(c, `【${wave.historicalYearLabel ?? formatYear(c.currentYear)}】${wave.title}`, 'historical', wave.factBox);
		return wave;
	}

	// 2. ライフイベント（進路・結婚・出産：必ず決断を挟む）
	const lifePool = events.filter((e) => e.isLifecycle && isEventEligible(c, e));
	if (lifePool.length > 0 && rng() < 0.36) {
		const e = weighted(lifePool, (x) => (x.regionIds ? 4 : 1), rng);
		c.triggeredEventIds.push(e.id, `${e.id}@${c.age}`);
		pushFeed(c, e.title, 'decision', e.factBox);
		return e;
	}

	// 3. 時代・地域・環境の理不尽イベント
	const pool = events.filter((e) => !e.isHistoricalWave && !e.isLifecycle && isEventEligible(c, e));
	if (pool.length > 0 && rng() < 0.38) {
		const e = weighted(pool, (x) => (x.regionIds ? 3.5 : x.isUrban !== undefined ? 2.5 : x.classIds ? 1.8 : 1), rng);
		c.triggeredEventIds.push(e.id, `${e.id}@${c.age}`);
		pushFeed(c, e.title, 'decision', e.factBox);
		return e;
	}

	return undefined;
};

