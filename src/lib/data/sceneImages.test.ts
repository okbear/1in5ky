import { expect, test } from 'bun:test';
import { existsSync } from 'node:fs';
import { REGIONS } from '#lib/data/regions';
import { REGION_SCENES, SCENE_ATLAS, SCENE_COLUMNS, SCENE_ROWS } from '#lib/data/sceneImages';

test('every playable region has a landscape within the shipped atlas', () => {
	expect(existsSync(`static${SCENE_ATLAS}`)).toBe(true);
	for (const region of REGIONS) {
		const tile = REGION_SCENES[region.id];
		expect(Number.isInteger(tile)).toBe(true);
		expect(tile).toBeGreaterThanOrEqual(0);
		expect(tile).toBeLessThan(SCENE_COLUMNS * SCENE_ROWS);
	}
});

test('historical landscapes change with the current region and era', () => {
	expect(REGION_SCENES.em_edo).not.toBe(REGION_SCENES.mod_japan);
	expect(REGION_SCENES.anc_egypt).not.toBe(REGION_SCENES.mod_egypt);
	expect(REGION_SCENES.med_china).not.toBe(REGION_SCENES.med_japan);
});
