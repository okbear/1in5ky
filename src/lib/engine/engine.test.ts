import { describe, expect, test } from 'bun:test';
import { ERAS, ERA_ORDER } from '../data/eras';
import { REGIONS, regionsForEra } from '../data/regions';
import { ALL_EVENTS } from '../data/events';
import { BABY_IMAGES } from '../data/babyImages';
import { GRAVE_DATA } from '../data/graveData';
import { postMortem, resolveChoice, rollBirth, stepYear } from './engine';
import { parseMemorials, toMemorialRecord } from './memorials';
import { MAX_AGE, hazard } from './util';
import fs from 'fs';

describe('Data Consistency', () => {
	test('all 27 regions exist and classes sum to 100%', () => {
		expect(REGIONS.length).toBe(27);
		for (const r of REGIONS) {
			const classSum = r.classes.reduce((s, c) => s + c.share, 0);
			expect(Math.abs(classSum - 1.0) < 0.01 || Math.abs(classSum - 100) < 0.01).toBe(true);
			expect(r.maleNames.length).toBeGreaterThanOrEqual(10);
			expect(r.femaleNames.length).toBeGreaterThanOrEqual(10);
		}
	});

	test('all eras have regions whose birthWeight sums to 100%', () => {
		for (const id of ERA_ORDER) {
			const rs = regionsForEra(id);
			expect(rs.length).toBeGreaterThanOrEqual(4);
			const sum = rs.reduce((s, r) => s + r.birthWeight, 0);
			expect(sum).toBe(100);
		}
	});

	test('all baby images exist in static/', () => {
		for (const [id, info] of Object.entries(BABY_IMAGES)) {
			const path = 'static' + info.src;
			expect(fs.existsSync(path)).toBe(true);
		}
	});

	test('all grave data exist and match RegionId', () => {
		for (const r of REGIONS) {
			expect(GRAVE_DATA[r.id]).toBeDefined();
			expect(GRAVE_DATA[r.id].title).toBeDefined();
		}
	});

	test('all events are reachable in at least one region and have valid choices', () => {
		for (const e of ALL_EVENTS) {
			const reachable = REGIONS.some(
				(r) => (!e.eraIds || e.eraIds.includes(r.eraId)) && (!e.regionIds || e.regionIds.includes(r.id))
			);
			expect(reachable).toBe(true);
			expect(e.choices.length).toBeGreaterThanOrEqual(1);
			for (const c of e.choices) {
				expect(c.label.length).toBeGreaterThan(0);
				expect(c.outcomeText.length).toBeGreaterThan(0);
			}
		}
	});
});

describe('Engine Invariants', () => {
	test('infant hazard at age 0 is never capped or zeroed', () => {
		for (const r of REGIONS) {
			const q0 = hazard(r, 0, 1.0, 66.66666666666667);
			expect(Math.abs(q0 - r.infantMortality / 1000)).toBeLessThan(0.0001);
			// At health=50, healthMult=1.125
			expect(hazard(r, 0, 1.0, 50)).toBeCloseTo((r.infantMortality / 1000) * 1.125, 4);
		}
	});

	test('simulated lives maintain all domain invariants over 3,000 lives', () => {
		let choiceCursor = 0;
		for (let i = 0; i < 3000; i++) {
			const c = rollBirth();
			expect(c.birthYear).toBeGreaterThanOrEqual(c.era.yearStart);
			expect(c.birthYear).toBeLessThanOrEqual(c.era.yearEnd);
			expect(c.region.eraId).toBe(c.era.id);

			let prevAge = -1;
			let prevYear = c.birthYear - 1;

			for (let g = 0; g < 130; g++) {
				const res = stepYear(c);
				expect(c.age).toBeGreaterThanOrEqual(prevAge);
				expect(c.currentYear).toBeGreaterThanOrEqual(prevYear);
				prevAge = c.age;
				prevYear = c.currentYear;

				expect(c.health).toBeGreaterThanOrEqual(0);
				expect(c.health).toBeLessThanOrEqual(100);
				expect(c.happiness).toBeGreaterThanOrEqual(0);
				expect(c.happiness).toBeLessThanOrEqual(100);
				expect(c.knowledge).toBeGreaterThanOrEqual(0);
				expect(c.knowledge).toBeLessThanOrEqual(100);
				expect(c.relations).toBeGreaterThanOrEqual(0);
				expect(c.relations).toBeLessThanOrEqual(100);

				if (res.decision) {
					const ch = res.decision.choices[choiceCursor++ % res.decision.choices.length];
					const rChoice = resolveChoice(c, ch);
					if (rChoice.died) break;
				}
				if (res.ended) {
					expect(c.alive).toBe(false);
					expect(c.age).toBeLessThanOrEqual(MAX_AGE);
					expect(c.deathCause).toBeDefined();
					if (c.sex === 'M') {
						expect(c.deathCause).not.toBe('出産時の合併症');
						expect(c.deathCause).not.toBe('産褥熱・難産');
					}
					break;
				}
			}
		}
	});

	test('modern characters can live beyond 2026 into near-future天変地異', () => {
		let reachedNearFuture = 0;
		for (let i = 0; i < 500; i++) {
			const c = rollBirth(Math.random, 'modern');
			for (let g = 0; g < 130; g++) {
				const res = stepYear(c);
				if (res.decision) {
					const ch = res.decision.choices[0];
					if (resolveChoice(c, ch).died) break;
				}
				if (c.currentYear > 2026) reachedNearFuture++;
				if (res.ended) break;
			}
		}
		expect(reachedNearFuture).toBeGreaterThan(0);
	});

	test('post-2026 deaths record real deathCause in memorial and post-2095 deaths receive post-mortem events', () => {
		const c = rollBirth(() => 0.42, 'modern');
		c.currentYear = 2105;
		c.age = 85;
		c.alive = false;
		c.deathCause = '老衰';
		c.epitaph = 'テスト墓碑銘';
		const rec = toMemorialRecord(c, 1000);
		expect(rec.deathCause).toBe('老衰');
		expect(rec.deathYear).toBe(2105);
		const pm = postMortem(c);
		expect(pm.events.length).toBeGreaterThan(0);
		expect(pm.belief).toBeDefined();
	});
});

describe('Memorial Storage Security & Schema Validation', () => {
	test('rejects corrupt, non-array, oversized, NaN, seed-colliding, and prototype-polluting inputs', () => {
		expect(parseMemorials(null)).toEqual([]);
		expect(parseMemorials('')).toEqual([]);
		expect(parseMemorials('not-json')).toEqual([]);
		expect(parseMemorials('null')).toEqual([]);
		expect(parseMemorials('{}')).toEqual([]);
		expect(parseMemorials('"abc"')).toEqual([]);
		expect(parseMemorials('x'.repeat(300_000))).toEqual([]);

		const valid = {
			id: 'rec-1',
			name: 'アキラ',
			sex: 'M',
			eraId: 'modern',
			eraName: '現代',
			regionName: '日本',
			place: '東京',
			birthYear: 1995,
			deathYear: 2078,
			deathAge: 83,
			socialClass: '会社員・専門職',
			occupation: '技術者',
			deathCause: '老衰',
			epitaph: '穏やかな晩年だった。',
			summaryLine: '日本の会社員・専門職、83歳',
			createdAt: 1700000000000
		};
		const payload = JSON.stringify([
			valid,
			{ ...valid, id: 'rec-1' }, // duplicate ID
			{ ...valid, id: 'seed-1' }, // collides with SEED_MEMORIALS
			{ ...valid, id: 'bad-year', deathYear: 99999 }, // out-of-range year
			{ ...valid, id: 'bad-era', eraId: 'future_mars' }, // invalid EraId
			{ ...valid, id: 'bad-obj', name: { toString: null } }, // object coercion DoS
			JSON.parse('{"__proto__":{"polluted":true},"id":"proto-ok","name":"ハナ","sex":"F","eraId":"modern","eraName":"現代","regionName":"日本","place":"大阪","birthYear":2000,"deathYear":2080,"deathAge":80,"socialClass":"会社員","occupation":"教員","deathCause":"老衰","epitaph":"テスト","summaryLine":"テスト","createdAt":1}')
		]);
		const parsed = parseMemorials(payload);
		expect(parsed.length).toBe(2);
		expect(parsed[0].id).toBe('rec-1');
		expect(parsed[1].id).toBe('proto-ok');
		expect(({} as Record<string, unknown>).polluted).toBeUndefined();
		expect(Object.prototype.hasOwnProperty.call(parsed[1], '__proto__')).toBe(false);
	});
});
