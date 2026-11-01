import { expect, test } from 'bun:test';
import { baseHazard } from '#lib/engine/util';
import { REGIONS } from '#lib/data/regions';
import { parseMemorials, toMemorialRecord } from '#lib/engine/memorials';
import { die, rollBirth } from '#lib/engine/engine';
import { ALL_EVENTS } from '#lib/data/events';
import { matchesEventSetting } from '#lib/engine/eventScope';
import { ERAS } from '#lib/data/eras';

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
