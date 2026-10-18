import { describe, expect, test } from 'bun:test';
import { ERAS, ERA_ORDER } from '../data/eras';
import { REGIONS, regionsForEra } from '../data/regions';
import { ALL_EVENTS } from '../data/events';
import { BABY_IMAGES } from '../data/babyImages';
import { GRAVE_DATA } from '../data/graveData';
import { rollBirth, stepYear, resolveChoice } from './engine';
import { hazard, HORIZON_YEAR } from './util';
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
					const ch = res.decision.choices[0];
					const rChoice = resolveChoice(c, ch);
					if (rChoice.died) break;
				}

				if (res.ended) {
					if (c.ongoing) {
						expect(c.currentYear).toBe(HORIZON_YEAR);
					}
					break;
				}
			}
		}
	});
});
