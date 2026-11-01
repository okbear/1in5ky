import { expect, test } from 'bun:test';
import { baseHazard } from '#lib/engine/util';
import { REGIONS } from '#lib/data/regions';
import { parseMemorials, toMemorialRecord } from '#lib/engine/memorials';
import { die, rollBirth } from '#lib/engine/engine';
import { resolveChoice } from '#lib/engine/core';
import { ALL_EVENTS } from '#lib/data/events';
import { matchesEventSetting } from '#lib/engine/eventScope';
import { ERAS } from '#lib/data/eras';
import { isEventEligible } from '#lib/engine/events';

test('ancient sites and the Onin War require the relevant city and period', () => {
	for (const [id, regionId, place, year, expected] of [
		['anc_egypt_tomb_robbery', 'anc_egypt', 'テーベ', -1200, true],
		['anc_egypt_tomb_robbery', 'anc_egypt', 'メンフィス', -1200, false],
		['anc_egypt_tomb_robbery', 'anc_egypt', 'テーベ', -2500, false],
		['anc_china_oracle_sacrifice', 'anc_china', '殷墟', -1100, true],
		['anc_china_oracle_sacrifice', 'anc_china', '鎬京', -1100, false],
		['anc_china_oracle_sacrifice', 'anc_china', '殷墟', -600, false],
		['anc_indus_great_bath_hygiene', 'anc_indus', 'モヘンジョ・ダロ', -2300, true],
		['anc_indus_great_bath_hygiene', 'anc_indus', 'ハラッパー', -2300, false],
		['med_jpn_onrui_fire_kyoto', 'med_japan', '平安京（京都）', 1467, true],
		['med_jpn_onrui_fire_kyoto', 'med_japan', '鎌倉', 1467, false],
		['med_jpn_onrui_fire_kyoto', 'med_japan', '平安京（京都）', 1300, false]
	] as const) {
		const region = REGIONS.find(entry => entry.id === regionId)!;
		const event = ALL_EVENTS.find(entry => entry.id === id)!;
		expect(matchesEventSetting({ region, era: ERAS[region.eraId], place, currentYear: year }, event)).toBe(expected);
	}
});

test('named historical episodes stay within their dates and local settings', () => {
	for (const [id, regionId, place, year, expected] of [
		['em_ind_taj_mahal_quarry_labor', 'em_mughal_india', 'アーグラ', 1600, false],
		['em_ind_taj_mahal_quarry_labor', 'em_mughal_india', 'アーグラ', 1640, true],
		['em_ind_taj_mahal_quarry_labor', 'em_mughal_india', 'ラホール', 1640, false],
		['em_eur_pressgang_navy', 'em_france', 'パリ', 1750, false],
		['em_eur_pressgang_navy', 'em_britain', 'ロンドン', 1750, true],
		['ind_chn_may_fourth_protest', 'ind_china', '北京', 1918, false],
		['ind_chn_may_fourth_protest', 'ind_china', '北京', 1919, true],
		['ind_chn_boxer_bullet_storm', 'ind_china', '上海', 1900, false],
		['ind_jpn_rice_riot_store', 'ind_japan', '神戸', 1918, true],
		['ind_jpn_rice_riot_store', 'ind_japan', '東京', 1918, false],
		['ind_ind_dandi_salt_gathering', 'ind_india', 'ボンベイ', 1930, true],
		['mod_jpn_great_quake_liquefaction', 'mod_japan', '東北の沿岸集落', 2011, true],
		['mod_jpn_great_quake_liquefaction', 'mod_japan', '大阪', 2011, false],
		['mod_jpn_covid_isolation', 'mod_japan', '東京', 1950, false],
		['mod_jpn_covid_isolation', 'mod_japan', '東京', 2021, true]
	] as const) {
		const region = REGIONS.find(entry => entry.id === regionId)!;
		const event = ALL_EVENTS.find(entry => entry.id === id)!;
		expect(matchesEventSetting({ region, era: ERAS[region.eraId], place, currentYear: year }, event)).toBe(expected);
	}
});

test('classical monuments, royal edicts and epidemics do not precede their historical setting', () => {
	for (const [id, regionId, place, year, expected] of [
		['cls_rome_gladiator_ticket', 'cls_rome', 'ローマ', 79, false],
		['cls_rome_gladiator_ticket', 'cls_rome', 'ローマ', 80, true],
		['cls_rome_gladiator_ticket', 'cls_rome', 'アレクサンドリア', 100, false],
		['cls_india_ashoka_edicts_hearing', 'cls_india', 'パータリプトラ', -250, true],
		['cls_india_ashoka_edicts_hearing', 'cls_india', 'パータリプトラ', 100, false],
		['classical_plague_war', 'cls_rome', 'ローマ', 164, false],
		['classical_plague_war', 'cls_rome', 'ローマ', 165, true],
		['classical_plague_war', 'cls_india', 'パータリプトラ', 165, false],
		['classical_great_wall_frontier', 'cls_han', '長安', -100, true],
		['classical_great_wall_frontier', 'cls_han', '長安', 300, false],
		['cls_han_corvee_great_wall', 'cls_han', '長安', 300, false]
	] as const) {
		const region = REGIONS.find(entry => entry.id === regionId)!;
		const event = ALL_EVENTS.find(entry => entry.id === id)!;
		expect(matchesEventSetting({ region, era: ERAS[region.eraId], place, currentYear: year }, event)).toBe(expected);
	}
});

test('wartime Japanese call-up and Bangladesh conflict do not spill into peaceful years or other countries', () => {
	for (const [id, regionId, year, expected] of [
		['industrial_conscription_order', 'ind_japan', 1800, false],
		['industrial_conscription_order', 'ind_japan', 1936, false],
		['industrial_conscription_order', 'ind_japan', 1937, true],
		['industrial_conscription_order', 'ind_japan', 1944, true],
		['modern_cold_war_conflict', 'mod_bangladesh', 1970, false],
		['modern_cold_war_conflict', 'mod_bangladesh', 1971, true],
		['modern_cold_war_conflict', 'mod_bangladesh', 1972, false],
		['modern_cold_war_conflict', 'mod_thailand', 1971, false],
		['modern_cold_war_conflict', 'mod_ghana', 1971, false]
	] as const) {
		const region = REGIONS.find(entry => entry.id === regionId)!;
		const event = ALL_EVENTS.find(entry => entry.id === id)!;
		expect(matchesEventSetting({ region, era: ERAS[region.eraId], place: region.cities[0], currentYear: year }, event)).toBe(expected);
	}
});

test('world war participation and air raids respect country, city and year boundaries', () => {
	for (const [id, regionId, place, year, expected] of [
		['ww1_1914', 'ind_usa', 'ニューヨーク', 1914, false],
		['ww1_italy_1915', 'ind_italy', 'ローマ', 1914, false],
		['ww1_italy_1915', 'ind_italy', 'ローマ', 1915, true],
		['ww1_usa_1917', 'ind_usa', 'ニューヨーク', 1916, false],
		['ww1_usa_1917', 'ind_usa', 'ニューヨーク', 1917, true],
		['industrial_total_war_air_raid', 'mod_japan', '東京', 1937, false],
		['industrial_total_war_air_raid', 'mod_japan', '東京', 1945, true],
		['industrial_total_war_air_raid', 'mod_japan', '京都', 1945, false],
		['london_blitz_1940', 'ind_britain', 'ロンドン', 1939, false],
		['london_blitz_1940', 'ind_britain', 'ロンドン', 1940, true],
		['london_blitz_1940', 'ind_britain', 'マンチェスター', 1940, false]
	] as const) {
		const region = REGIONS.find(entry => entry.id === regionId)!;
		const event = ALL_EVENTS.find(entry => entry.id === id)!;
		expect(matchesEventSetting({ region, era: ERAS[region.eraId], place, currentYear: year }, event)).toBe(expected);
	}
});

test('Mongol sieges and Thirty Years War raids stay in their documented settings', () => {
	const cases = [
		['mongol_1220', 'med_central_asia', 'サマルカンド', 1220, true],
		['mongol_1220', 'med_britain', 'ロンドン', 1220, false],
		['mongol_1220', 'med_egypt', 'カイロ', 1220, false],
		['mongol_1220', 'med_central_asia', '中央アジアのオアシスの村', 1220, false],
		['mongol_1220', 'med_central_asia', 'サマルカンド', 1221, false],
		['mongol_baghdad_1258', 'med_iraq', 'バグダード', 1258, true],
		['mongol_baghdad_1258', 'med_iraq', 'バスラ', 1258, false],
		['mongol_baghdad_1258', 'med_iraq', 'バグダード', 1257, false],
		['early_modern_thirty_years_mercenary', 'em_germany', 'ドイツの農村', 1630, true],
		['early_modern_thirty_years_mercenary', 'em_britain', 'ブリテンの農村', 1630, false]
	] as const;
	for (const [id, regionId, place, year, expected] of cases) {
		const region = REGIONS.find(entry => entry.id === regionId)!;
		const event = ALL_EVENTS.find(entry => entry.id === id)!;
		expect(matchesEventSetting({ region, era: ERAS[region.eraId], place, currentYear: year }, event)).toBe(expected);
	}
});

test('modern youth receive modern career choices and urban artisans never owe a grain harvest', () => {
	const c = rollBirth(() => 0.5, 'modern');
	c.age = 16; c.triggeredEventIds = [];
	const oldCareer = ALL_EVENTS.find(event => event.id === 'work_choice_youth')!;
	const modernCareer = ALL_EVENTS.find(event => event.id === 'modern_youth_path')!;
	expect(isEventEligible(c, oldCareer)).toBe(false);
	c.environment.socialClass = { ...c.environment.socialClass, id: 'peasant' };
	expect(isEventEligible(c, modernCareer)).toBe(true);
	c.age = 12;
	expect(isEventEligible(c, modernCareer)).toBe(false);
	const tax = ALL_EVENTS.find(event => event.id === 'tax_burden')!;
	const region = REGIONS.find(region => region.id === 'em_edo')!;
	c.environment = { region, era: ERAS[region.eraId], socialClass: region.classes.find(entry => entry.id === 'peasant')!, coverage: 'matched' };
	c.currentYear = 1700; c.age = 30; c.isUrban = false;
	expect(isEventEligible(c, tax)).toBe(true);
	c.isUrban = true;
	expect(isEventEligible(c, tax)).toBe(false);
	c.isUrban = false;
	c.environment.socialClass = region.classes.find(entry => entry.id === 'artisan')!;
	expect(isEventEligible(c, tax)).toBe(false);
});

test('modern childbirth preserves its configured probability instead of a one-percent death floor', () => {
	const event = ALL_EVENTS.find((entry) => entry.id === 'childbirth_modern')!;
	const choice = event.choices.find((entry) => entry.id === 'birth_modern_hospital')!;
	for (const health of [0, 50, 100]) {
		for (const [roll, dies] of [[0.9959, false], [0.996, true]] as const) {
			const character = rollBirth(() => 0.5, 'modern');
			character.health = health;
			expect(resolveChoice(character, choice, () => roll).died).toBe(dies);
		}
	}
});

test('manorial marriage dues stay in medieval Britain rather than every European region', () => {
	const event = ALL_EVENTS.find((entry) => entry.id === 'marriage_serf_merchet')!;
	for (const region of REGIONS) {
		expect(matchesEventSetting({ region, era: ERAS[region.eraId], currentYear: ERAS[region.eraId].yearEnd, place: region.ruralAreas[0] }, event))
			.toBe(region.id === 'med_britain');
	}
	expect(event.isUrban).toBe(false);
});

test('British naval impressment does not leak into other European countries or later years', () => {
	const event = ALL_EVENTS.find((entry) => entry.id === 'press_gang_conscription')!;
	for (const region of REGIONS.filter((entry) => event.eraIds?.includes(entry.eraId))) {
		for (const year of [1699, 1700, 1799, 1800, 1815, 1816, 1900]) {
			const era = ERAS[region.eraId];
			if (year < era.yearStart || year > era.yearEnd) continue;
			expect(matchesEventSetting({ region, era, currentYear: year, place: region.cities[0] }, event))
				.toBe(region.country === 'britain' && year >= 1700 && year <= 1815);
		}
	}
});

test('mortality calibration follows life-table inputs when profiles share an ID', () => {
	const profile = REGIONS[0];
	const shorter = { ...profile, lifeExpectancyAt15: 45 };
	const longer = { ...profile, lifeExpectancyAt15: 80 };
	const shortHazard = baseHazard(shorter, 50);
	const longHazard = baseHazard(longer, 50);
	expect(longHazard).toBeLessThan(shortHazard);
	expect(baseHazard(shorter, 50)).toBe(shortHazard);
	expect(baseHazard(longer, 50)).toBe(longHazard);
});

test('stored memorials must describe consistent birth, death and age, within the game lifespan', () => {
	const character = rollBirth(() => 0.99, 'modern');
	character.age = 30;
	character.currentYear = character.birthYear + 30;
	die(character, '外傷');
	const memorial = toMemorialRecord(character, 1);
	expect(parseMemorials(JSON.stringify([memorial]))).toHaveLength(1);
	for (const invalid of [
		{ ...memorial, deathAge: 31 },
		{ ...memorial, deathYear: memorial.deathYear + 1 },
		{ ...memorial, deathAge: 111, deathYear: memorial.birthYear + 111 }
	]) {
		expect(parseMemorials(JSON.stringify([invalid]))).toEqual([]);
	}
});
