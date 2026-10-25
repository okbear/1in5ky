import { describe, expect, test } from 'bun:test';
import { ERAS, ERA_ORDER } from '../data/eras';
import { REGIONS, regionsForEra } from '../data/regions';
import { ALL_EVENTS } from '../data/events';
import { BABY_IMAGES } from '../data/babyImages';
import { GRAVE_DATA } from '../data/graveData';
import { ERA_CHRONICLES, OVERTURNED_BELIEFS, SEED_MEMORIALS, WORLD_TIMELINE } from '../data/timeline';
import { postMortem, resolveChoice, rollBirth, stepYear } from './engine';
import { parseMemorials, toMemorialRecord } from './memorials';
import { MAX_AGE, hazard, survivalRateAtAge } from './util';
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

	test('survivalRateAtAge matches exact regional infant and under-5 mortality tables', () => {
		for (const r of REGIONS) {
			expect(survivalRateAtAge(r, 0)).toBe(1);
			expect(survivalRateAtAge(r, 1)).toBeCloseTo(1 - r.infantMortality / 1000, 6);
			expect(survivalRateAtAge(r, 5)).toBeCloseTo(1 - r.under5Mortality / 1000, 6);
			expect(survivalRateAtAge(r, 60)).toBeLessThan(survivalRateAtAge(r, 15));
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

describe('Content Integrity', () => {
	const FUTURE_END = 2120; // 近未来シナリオ（2028〜）まで含めた modern 時代の実効終端
	const eraSpan = (id: keyof typeof ERAS): [number, number] => [ERAS[id].yearStart, id === 'modern' ? FUTURE_END : ERAS[id].yearEnd];

	test('event ids are unique and choice ids are unique within each event', () => {
		const seen = new Set<string>();
		for (const e of ALL_EVENTS) {
			expect(seen.has(e.id), `duplicate event id ${e.id}`).toBe(false);
			seen.add(e.id);
			const cids = e.choices.map((c) => c.id);
			expect(new Set(cids).size, `duplicate choice id in ${e.id}`).toBe(cids.length);
		}
	});

	test('event targeting is coherent (ages, years, regions, probabilities, effect magnitudes)', () => {
		for (const e of ALL_EVENTS) {
			const ctx = `event ${e.id}`;
			expect(e.minAge, ctx).toBeLessThanOrEqual(e.maxAge);
			expect(e.minAge, ctx).toBeGreaterThanOrEqual(0);
			expect(e.title.length, ctx).toBeGreaterThan(0);
			expect(e.description.length, ctx).toBeGreaterThan(20);
			expect(e.factBox.length, ctx).toBeGreaterThan(20);
			for (const rid of e.regionIds ?? []) {
				const r = REGIONS.find((x) => x.id === rid);
				expect(r, `${ctx}: unknown region ${rid}`).toBeDefined();
				if (e.eraIds) expect(e.eraIds, `${ctx}: region ${rid} outside eraIds`).toContain(r!.eraId);
			}
			if (e.yearRange) {
				const [a, b] = e.yearRange;
				expect(a, ctx).toBeLessThanOrEqual(b);
				const eras = e.eraIds ?? ERA_ORDER;
				const overlaps = eras.some((id) => {
					const [s, t] = eraSpan(id);
					return a <= t && b >= s;
				});
				expect(overlaps, `${ctx}: yearRange outside its eras`).toBe(true);
				expect(b, ctx).toBeLessThanOrEqual(FUTURE_END);
			}
			for (const c of e.choices) {
				const cctx = `${ctx}/${c.id}`;
				if (c.survivalChance !== undefined) {
					expect(c.survivalChance, cctx).toBeGreaterThan(0);
					expect(c.survivalChance, cctx).toBeLessThan(1);
					expect(c.deathCause?.length ?? 0, `${cctx}: deathCause missing`).toBeGreaterThan(0);
					expect(c.deathText?.length ?? 0, `${cctx}: deathText missing (outcomeText describes survival)`).toBeGreaterThan(10);
				}
				const fx = c.effects;
				for (const k of ['health', 'happiness', 'knowledge', 'relations'] as const) {
					expect(Math.abs(fx[k] ?? 0), `${cctx}.${k}`).toBeLessThanOrEqual(40);
				}
				expect(fx.wealthDelta ?? 0, cctx).toBeGreaterThanOrEqual(-90);
				expect(fx.wealthDelta ?? 0, cctx).toBeLessThanOrEqual(150);
				if (fx.marry || fx.addChild) {
					expect(e.isLifecycle, `${cctx}: marriage/childbirth must go through an isLifecycle decision`).toBe(true);
				}
				if (fx.marry) expect(e.requiresUnmarried, `${cctx}: marry needs requiresUnmarried`).toBe(true);
				if (fx.addChild) {
					expect(e.id.startsWith('childbirth_'), `${cctx}: addChild events need the childbirth_ id prefix (child cap + cooldown)`).toBe(true);
					expect(e.requiresSpouse, `${cctx}: addChild needs requiresSpouse`).toBe(true);
				}
			}
		}
	});

	test('region name lists are large, unique, and gender-disjoint', () => {
		for (const r of REGIONS) {
			expect(r.maleNames.length, r.id).toBeGreaterThanOrEqual(24);
			expect(r.femaleNames.length, r.id).toBeGreaterThanOrEqual(24);
			expect(new Set(r.maleNames).size, `${r.id} male dup`).toBe(r.maleNames.length);
			expect(new Set(r.femaleNames).size, `${r.id} female dup`).toBe(r.femaleNames.length);
			for (const n of r.maleNames) expect(r.femaleNames.includes(n), `${r.id}: ${n} in both`).toBe(false);
		}
	});

	test('every region has a healthy pool of region-specific events', () => {
		for (const r of REGIONS) {
			const n = ALL_EVENTS.filter((e) => e.regionIds?.includes(r.id) && !e.isLifecycle).length;
			expect(n, `${r.id} region-specific events`).toBeGreaterThanOrEqual(5);
		}
	});

	test('chronicle topics are unique, in-range, and cover every period of their era', () => {
		for (const id of ERA_ORDER) {
			const topics = ERA_CHRONICLES[id];
			const titles = topics.map((t) => t.title);
			expect(new Set(titles).size, `${id} duplicate chronicle titles`).toBe(titles.length);
			expect(topics.length, id).toBeGreaterThanOrEqual(30);
			const [s, t] = eraSpan(id);
			for (const x of topics) {
				expect(x.regionTag.length, `${id}:${x.title}`).toBeGreaterThan(0);
				expect(x.description.length, `${id}:${x.title}`).toBeGreaterThan(10);
				if (x.yearRange) {
					expect(x.yearRange[0], x.title).toBeLessThanOrEqual(x.yearRange[1]);
					expect(x.yearRange[0] <= t && x.yearRange[1] >= s, `${x.title} outside era`).toBe(true);
				}
			}
			const step = Math.max(5, Math.round((Math.min(t, 2026) - s) / 100));
			for (let y = s; y <= Math.min(t, 2026); y += step) {
				const live = topics.filter((x) => !x.yearRange || (y >= x.yearRange[0] && y <= x.yearRange[1]));
				expect(live.length, `${id}: only ${live.length} chronicle topics in year ${y}`).toBeGreaterThanOrEqual(3);
			}
		}
	});

	test('seed memorials are internally consistent and loadable', () => {
		const ids = new Set<string>();
		for (const m of SEED_MEMORIALS) {
			expect(ids.has(m.id), `dup seed ${m.id}`).toBe(false);
			ids.add(m.id);
			expect(m.deathYear - m.birthYear, m.id).toBe(m.deathAge);
			expect(m.deathAge, m.id).toBeGreaterThanOrEqual(0);
			expect(m.deathAge, m.id).toBeLessThanOrEqual(MAX_AGE);
			expect(m.birthYear >= ERAS[m.eraId].yearStart && m.birthYear <= ERAS[m.eraId].yearEnd, `${m.id} birth outside era`).toBe(true);
			expect(m.eraName, m.id).toBe(ERAS[m.eraId].name);
			expect(REGIONS.some((r) => r.eraId === m.eraId && r.name === m.regionName), `${m.id}: regionName "${m.regionName}"`).toBe(true);
			expect(m.name.length, m.id).toBeLessThanOrEqual(64);
			expect(m.place.length, m.id).toBeLessThanOrEqual(64);
			expect(m.deathCause.length, m.id).toBeLessThanOrEqual(120);
			expect(m.epitaph.length, m.id).toBeLessThanOrEqual(300);
			expect(m.summaryLine.length, m.id).toBeLessThanOrEqual(120);
			expect(m.epitaph.includes(m.name), `${m.id}: epitaph lacks name`).toBe(true);
			if (m.sex === 'M') expect(m.deathCause, m.id).not.toMatch(/出産|産褥/);
		}
		for (const id of ERA_ORDER) {
			expect(SEED_MEMORIALS.filter((m) => m.eraId === id).length, `${id} seeds`).toBeGreaterThanOrEqual(14);
		}
		expect(parseMemorials(JSON.stringify(SEED_MEMORIALS))).toEqual([]);
	});

	test('world timeline and overturned beliefs are well-formed', () => {
		const titles = WORLD_TIMELINE.map((e) => e.title);
		expect(new Set(titles).size).toBe(titles.length);
		const years = WORLD_TIMELINE.map((e) => e.year);
		expect(new Set(years).size, 'one world-timeline entry per year (chronicleTick shows one per year)').toBe(years.length);
		expect(WORLD_TIMELINE.length).toBeGreaterThanOrEqual(120);
		for (const e of WORLD_TIMELINE) expect(Number.isInteger(e.year) && e.description.length > 10).toBe(true);
		const untils = OVERTURNED_BELIEFS.map((b) => b.until);
		expect(untils).toEqual([...untils].sort((a, b) => a - b));
		expect(new Set(untils).size).toBe(untils.length);
	});
});
