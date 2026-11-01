import { expect, test } from 'bun:test';
import { baseHazard } from '#lib/engine/util';
import { REGIONS } from '#lib/data/regions';
import { parseMemorials, toMemorialRecord } from '#lib/engine/memorials';
import { die, rollBirth } from '#lib/engine/engine';

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
