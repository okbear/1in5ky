import { expect, test } from 'bun:test';
import { ALL_EVENTS } from '#lib/data/events';
import { REGIONS } from '#lib/data/regions';
import { EVENT_IMAGES, getEventImage } from '#lib/data/eventImages';
import type { RegionId } from '#lib/types';

test('Roman requisition remains playable in India and Persia without Roman artwork', () => {
	const event = ALL_EVENTS.find((entry) => entry.id === 'classical_punic_legion_siege')!;
	for (const regionId of ['cls_india', 'cls_persia'] as const) {
		expect(event.regionIds).toContain(regionId);
		expect(getEventImage(event.id, regionId)).toBeUndefined();
	}
	expect(getEventImage(event.id, 'cls_rome')?.src).toBe('/images/events/classical_punic_legion_siege.jpg');
});

test('Mesopotamian temples and chariots do not appear in other ancient cultures', () => {
	for (const id of ['ancient_corvee', 'ancient_chariot_war']) {
		expect(getEventImage(id, 'anc_mesopotamia')?.src).toBe(`/images/events/${id}.jpg`);
		for (const regionId of ['anc_egypt', 'anc_china', 'anc_aegean'] as const) {
			expect(getEventImage(id, regionId)).toBeUndefined();
		}
	}
});

test('symbolic images remain available across regions and absent images stay absent', () => {
	for (const region of REGIONS) {
		expect(getEventImage('marriage_modern', region.id)).toBe(EVENT_IMAGES.marriage_modern);
		expect(getEventImage('unknown_event', region.id)).toBeUndefined();
	}
});

test('all scoped artwork is hidden outside its declared regions', () => {
	const playable = new Set<RegionId>(REGIONS.map((region) => region.id));
	for (const [id, image] of Object.entries(EVENT_IMAGES)) {
		if (!image.regionIds) continue;
		for (const regionId of image.regionIds) expect(playable.has(regionId)).toBe(true);
		for (const region of REGIONS) {
			expect(getEventImage(id, region.id)).toBe(image.regionIds.includes(region.id) ? image : undefined);
		}
	}
});
