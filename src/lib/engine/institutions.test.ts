import { expect, test } from 'bun:test';
import { INSTITUTIONS } from '#lib/data/institutions';
import { REGIONS } from '#lib/data/regions';
import { ERAS } from '#lib/data/eras';
import { ALL_EVENTS } from '#lib/data/events';
import { matchesEventSetting } from '#lib/engine/eventScope';
import type { DecisionEvent, InstitutionId } from '#lib/types';
import { rollBirth } from '#lib/engine/engine';
import { isEventEligible } from '#lib/engine/events';

test('Edo collective tax obligations exclude China, early dates and urban artisans', () => {
 const event = ALL_EVENTS.find(event => event.id === 'collective_punishment')!;
 const c = rollBirth(() => 0.5, 'early_modern');
 const region = REGIONS.find(region => region.id === 'em_edo')!;
 c.environment = { region, era: ERAS.early_modern, socialClass: region.classes.find(entry => entry.id === 'peasant')!, coverage: 'matched' };
 c.age = 30; c.currentYear = 1643; c.place = region.ruralAreas[0]; c.isUrban = false; c.triggeredEventIds = [];
 expect(isEventEligible(c, event)).toBe(true);
 c.currentYear = 1642;
 expect(isEventEligible(c, event)).toBe(false);
 c.currentYear = 1700; c.isUrban = true;
 expect(isEventEligible(c, event)).toBe(false);
 c.isUrban = false; c.environment.socialClass = region.classes.find(entry => entry.id === 'artisan')!;
 expect(isEventEligible(c, event)).toBe(false);
 for (const id of ['cls_han', 'med_china', 'em_china', 'med_japan'] as const) {
  const other = REGIONS.find(region => region.id === id)!;
  expect(matchesEventSetting({ region: other, era: ERAS[other.eraId], currentYear: 1700, place: other.ruralAreas[0] }, event)).toBe(false);
 }
});

test('slave sale requires enslaved status and hunting privilege does not spread to Japan', () => {
 const sale = ALL_EVENTS.find(event => event.id === 'serf_master_whim')!;
 const c = rollBirth(() => 0.5, 'classical');
 const region = REGIONS.find(region => region.id === 'cls_rome')!;
 c.currentYear = 100; c.age = 25; c.place = 'ローマ'; c.triggeredEventIds = [];
 c.environment = { region, era: ERAS.classical, socialClass: region.classes.find(entry => entry.id === 'enslaved')!, coverage: 'matched' };
 expect(isEventEligible(c, sale)).toBe(true);
 c.environment.socialClass = region.classes.find(entry => entry.id === 'peasant')!;
 expect(isEventEligible(c, sale)).toBe(false);
 c.environment.socialClass = region.classes.find(entry => entry.id === 'enslaved')!;
 c.currentYear = 401;
 expect(isEventEligible(c, sale)).toBe(false);
 const hunt = ALL_EVENTS.find(event => event.id === 'rural_lord_hunt')!;
 const japanese = REGIONS.find(region => region.id === 'med_japan')!;
 expect(matchesEventSetting({ region: japanese, era: ERAS.medieval, currentYear: 1200, place: japanese.ruralAreas[0] }, hunt)).toBe(false);
});

test('institution constraints survive accidentally broad event scopes and enforce calendar boundaries', () => {
 const original = ALL_EVENTS.find(event => event.id === 'trial_by_ordeal')!;
 const { regionIds: _, ...rest } = original;
 const broad: DecisionEvent = { ...rest, allRegions: true };
 for (const region of REGIONS) for (const year of [1099, 1100, 1214, 1215, 1400]) {
  const setting = { region, era: ERAS[region.eraId], currentYear: year, place: 'ロンドン' };
  expect(matchesEventSetting(setting, broad)).toBe(region.id === 'med_britain' && year >= 1100 && year <= 1214);
 }
 const region = REGIONS.find(region => region.id === 'med_britain')!;
 const setting = { region, era: ERAS.medieval, currentYear: 1200, place: 'ブリテンの農村' };
 expect(matchesEventSetting(setting, broad)).toBe(false);
 expect(matchesEventSetting({ ...setting, place: 'ロンドン' }, { ...broad, requiresInstitutions: ['unknown' as InstitutionId] })).toBe(false);
});

test('institution definitions have explicit evidence, real regions, and nonempty time windows', () => {
 for (const scope of Object.values(INSTITUTIONS)) {
  expect(scope.sourceUrls.length).toBeGreaterThan(0);
  expect(scope.note.length).toBeGreaterThan(0);
  expect(scope.yearRange[0]).toBeLessThanOrEqual(scope.yearRange[1]);
  for (const id of scope.regionIds) expect(REGIONS.some(region => region.id === id)).toBe(true);
 }
 for (const event of ALL_EVENTS) for (const id of event.requiresInstitutions ?? []) expect(INSTITUTIONS[id]).toBeDefined();
});
