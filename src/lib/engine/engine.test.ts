import { describe, expect, test } from 'bun:test';
import { ERAS, ERA_ORDER } from '../data/eras';
import { REGIONS, regionsForEra } from '../data/regions';
import { ALL_EVENTS } from '../data/events';
import { BABY_IMAGES } from '../data/babyImages';
import { GRAVE_DATA } from '../data/graveData';
import { ERA_CHRONICLES, OVERTURNED_BELIEFS, SEED_MEMORIALS, WORLD_TIMELINE } from '../data/timeline';
import { canRevive, die, postMortem, resolveChoice, revive, rollBirth, stepYear } from './engine';
import { parseMemorials, toMemorialRecord } from './memorials';
import { MAX_AGE, hazard, survivalRateAtAge } from './util';
import fs from 'fs';
import { matchesEventSetting } from '#lib/engine/eventScope';
import type { DecisionEvent, RegionId } from '#lib/types';

describe('Data Consistency', () => {
	test('all 53 regions exist and classes sum to 100%', () => {
		expect(REGIONS.length).toBe(53);
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
			if (info.src === null) {
				expect(info.caption.length, id).toBeGreaterThan(0);
				continue;
			}
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

	test('revive: allowed below 60, refused at 60+, character resumes stepping', () => {
		for (const [age, ok] of [[0, true], [59, true], [60, false], [110, false]] as const) {
			const c = rollBirth(() => 0.42, 'modern');
			c.age = age;
			die(c, 'テスト死因');
			expect(canRevive(c)).toBe(ok);
			expect(revive(c)).toBe(ok);
			expect(c.alive).toBe(ok);
			expect(c.deathCause === undefined).toBe(ok);
		}
		const c = rollBirth(() => 0.42, 'modern');
		c.age = 30;
		die(c, 'テスト死因');
		revive(c);
		expect(c.epitaph).toBe('');
		expect(stepYear(c, () => 0.999).ended).toBe(false);
		expect(c.age).toBe(31);
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

	test('every region has a healthy pool of explicitly targeted or shared events', () => {
		for (const r of REGIONS) {
			// A split must not be padded with another culture's events to meet a quota.
			const n = ALL_EVENTS.filter((e) =>
				!e.isLifecycle && (!e.eraIds || e.eraIds.includes(r.eraId)) &&
				(e.regionIds?.includes(r.id) || e.allRegions === true)
			).length;
			expect(n, `${r.id} playable event pool`).toBeGreaterThanOrEqual(5);
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

describe('Geographic scenario isolation', () => {
	const region = (id: RegionId) => REGIONS.find((r) => r.id === id)!;
	const setting = (id: RegionId, place?: string, year?: number) => {
		const r = region(id);
		return { region: r, era: ERAS[r.eraId], place: place ?? r.cities[0], currentYear: year ?? ERAS[r.eraId].yearStart };
	};
	const event = (id: string) => ALL_EVENTS.find((e) => e.id === id)!;

	test('every event explicitly chooses regional or shared scope, including at runtime', () => {
		for (const e of ALL_EVENTS) {
			expect(Boolean(e.regionIds?.length) !== (e.allRegions === true), e.id).toBe(true);
			if (e.places) {
				expect(e.places.length, e.id).toBeGreaterThan(0);
				for (const place of e.places) {
					expect(REGIONS.some((r) => e.regionIds?.includes(r.id) && [...r.cities, ...r.ruralAreas].includes(place)), `${e.id}: ${place}`).toBe(true);
				}
			}
		}
		const { allRegions: _, ...unscoped } = event('work_choice_youth');
		expect(matchesEventSetting(setting('em_china'), unscoped as DecisionEvent)).toBe(false);
	});

	test('split scenarios preserve the original birth allocations and mortality tables', () => {
		const groups: [RegionId[], number][] = [
			[['anc_indus', 'anc_aegean'], 41],
			[['cls_persia', 'cls_africa', 'cls_mesoamerica', 'cls_yayoi'], 24],
			[['med_india', 'med_west_africa', 'med_east_africa', 'med_mesoamerica', 'med_andes', 'med_southeast_asia'], 35],
			[['em_west_africa', 'em_caribbean', 'em_andes', 'em_mesoamerica', 'em_north_america'], 23],
			[['ind_europe', 'ind_north_america'], 22],
			[['ind_india', 'ind_southeast_asia'], 16],
			[['ind_russia', 'ind_egypt', 'ind_congo', 'ind_latin_america'], 28],
			[['mod_china', 'mod_korea', 'mod_taiwan'], 19],
			[['mod_south_asia', 'mod_southeast_asia'], 32],
			[['mod_subsaharan_africa', 'mod_mena'], 20]
		];
		for (const [ids, weight] of groups) {
			const profiles = ids.map(region);
			expect(profiles.reduce((sum, r) => sum + r.birthWeight, 0)).toBe(weight);
			for (const r of profiles) {
				expect(r.infantMortality).toBe(profiles[0].infantMortality);
				expect(r.under5Mortality).toBe(profiles[0].under5Mortality);
			}
		}
		expect(new Set(REGIONS.map((r) => r.id)).size).toBe(REGIONS.length);
		expect(Object.keys(BABY_IMAGES).sort()).toEqual(REGIONS.map((r) => r.id).sort());
		expect(Object.keys(GRAVE_DATA).sort()).toEqual(REGIONS.map((r) => r.id).sort());
	});

	test('regional historical events cannot cross the former composite boundaries', () => {
		const cases: [string, RegionId, RegionId, number][] = [
			['em_ind_taj_mahal_quarry_labor', 'em_mughal_india', 'em_china', 1640],
			['em_chn_keju_examination_cubicle', 'em_china', 'em_mughal_india', 1700],
			['cls_other_teotihuacan_obsidian', 'cls_mesoamerica', 'cls_persia', 200],
			['cls_other_yayoi_bronze_bell', 'cls_yayoi', 'cls_mesoamerica', 200],
			['med_other_andes_quipu_tribute', 'med_andes', 'med_west_africa', 1450],
			['med_other_angkor_reservoir_breach', 'med_southeast_asia', 'med_india', 1200],
			['em_atl_potosi_quicksilver', 'em_andes', 'em_west_africa', 1650],
			['ind_oth_russian_mir_redemption', 'ind_russia', 'ind_congo', 1870],
			['ind_ind_malaya_rubber_tapping', 'ind_southeast_asia', 'ind_india', 1900],
			['mod_chn_backyard_steel_melt', 'mod_china', 'mod_korea', 1959],
			['mod_asia_dhaka_sewing_collapse', 'mod_south_asia', 'mod_southeast_asia', 2013],
			['mod_afr_cobalt_hand_dug_pit', 'mod_subsaharan_africa', 'mod_mena', 2010]
		];
		for (const [id, allowed, denied, year] of cases) {
			const e = event(id);
			expect(e, id).toBeDefined();
			expect(matchesEventSetting(setting(allowed, e.places?.[0], year), e), `${id}: allowed`).toBe(true);
			// Even an identical place string must not bypass the region restriction.
			expect(matchesEventSetting(setting(denied, e.places?.[0], year), e), `${id}: denied`).toBe(false);
		}
	});

	test('local events stay in their city or landscape within a broad region', () => {
		const dhaka = event('mod_asia_dhaka_sewing_collapse');
		expect(matchesEventSetting(setting('mod_south_asia', 'ダッカ', 2013), dhaka)).toBe(true);
		expect(matchesEventSetting(setting('mod_south_asia', 'デリー', 2013), dhaka)).toBe(false);
		const tsunami = event('mod_asia_indian_ocean_tsunami');
		expect(matchesEventSetting(setting('mod_southeast_asia', 'アチェ州の沿岸村', 2004), tsunami)).toBe(true);
		expect(matchesEventSetting(setting('mod_south_asia', 'デリー', 2004), tsunami)).toBe(false);
		const redPaper = event('industrial_conscription_order');
		expect(matchesEventSetting(setting('ind_japan', undefined, 1940), redPaper)).toBe(true);
		expect(matchesEventSetting(setting('ind_china', undefined, 1940), redPaper)).toBe(false);
		for (const id of ['window_salt_tax', 'witch_scapegoat', 'early_modern_thirty_years_mercenary']) {
			expect(matchesEventSetting(setting('em_china', undefined, 1630), event(id))).toBe(false);
			expect(matchesEventSetting(setting('em_mughal_india', undefined, 1630), event(id))).toBe(false);
		}
	});
});
