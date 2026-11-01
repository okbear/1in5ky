import { describe, expect, test } from 'bun:test';
import { REGIONS } from '#lib/data/regions';
import { ALL_EVENTS } from '#lib/data/events';
import { STATISTIC_KEYS, STATISTIC_SOURCES } from '#lib/data/statisticSources';
import { ERAS } from '#lib/data/eras';
import annualData from '#lib/data/annualMortality.json';
import { familyTick } from '#lib/engine/family';
import { annualMortalityProfile, updateEnvironment } from '#lib/engine/environment';
import { isEventEligible } from '#lib/engine/events';
import { hazard } from '#lib/engine/util';
import { rollBirth, stepYear, resolveChoice } from '#lib/engine/engine';
import type { CountryId, FamilyMember, RegionId, DecisionEvent } from '#lib/types';

function born(id: RegionId, year: number) {
 const region = REGIONS.find((r) => r.id === id)!;
 const c = rollBirth(() => 0.5, region.eraId);
 const socialClass = region.classes.find((entry) => entry.id === 'peasant')!;
 Object.assign(c, { region, era: ERAS[region.eraId], socialClass, birthYear: year, currentYear: year,
  age: 0, birthCountry: region.country, currentCountry: region.country, birthPlace: region.cities[0], place: region.cities[0], family: [],
  environment: { era: ERAS[region.eraId], region, socialClass, coverage: 'matched' }
 });
 return c;
}
const child: DecisionEvent = { id: '任意に改名したイベント', allRegions: true, category: 'livelihood', title: '',
 minAge: 15, maxAge: 50, description: '', factBox: '', isLifecycle: true, lifecycleKind: 'childbirth',
 repeatable: true, cooldownYears: 2, maxChildren: 6,
 choices: [{ id: 'yes', label: '', subLabel: '', effects: { addChild: true }, outcomeText: '' }]
};

describe('Explicit event rules', () => {
 test('renaming childbirth and mourning IDs cannot change their rules', () => {
  const c = born('mod_japan', 1970); c.age = 30; c.currentYear = 2000;
  c.triggeredEventIds = [`${child.id}@29`];
  expect(isEventEligible(c, child)).toBe(false);
  c.triggeredEventIds = [`${child.id}@27`];
  expect(isEventEligible(c, child)).toBe(true);
  c.family = Array.from({ length: 6 }, (_, i) => ({ id: `child-${i}`, relation: '子', name: `child-${i}`, birthYear: 1990 + i, status: 'alive' }));
  expect(isEventEligible(c, child)).toBe(false);
  resolveChoice(c, { id: '名前に依存しない', label: '弔う', subLabel: '', recordType: 'loss', effects: {}, outcomeText: '見送った。' });
  expect(c.feed[0].type).toBe('loss');
 });
 test('every repeat and lifecycle policy is declared in the data', () => {
  for (const event of ALL_EVENTS) {
   if (event.repeatable) expect(event.cooldownYears, event.id).toBeGreaterThanOrEqual(0);
   if (event.isLifecycle) expect(event.lifecycleKind, event.id).toBeDefined();
   for (const choice of event.choices) if (choice.effects.addChild) {
    expect(event.lifecycleKind, event.id).toBe('childbirth');
    expect(event.maxChildren, event.id).toBe(6);
   }
  }
 });
});

describe('Family calendar', () => {
 test('future siblings are unborn and have no exposure before their birth year', () => {
  const c = born('em_edo', 1700);
  const sibling: FamilyMember = { id: 'sibling', relation: '妹', name: 'おはる', birthYear: 1702, status: 'unborn' };
  c.family = [sibling];
  let calls = 0;
  c.currentYear = 1701; familyTick(c, () => { calls++; return 0; });
  expect(sibling.status).toBe('unborn'); expect(calls).toBe(0);
  c.currentYear = 1702; familyTick(c, () => { calls++; return 0; });
  expect(sibling.status).toBe('alive'); expect(calls).toBe(0);
  c.currentYear = 1703; familyTick(c, () => { calls++; return 0; });
  expect(sibling.status).toBe('dead'); expect(calls).toBe(1);
  expect(c.feed.some((f) => f.text === '妹のおはるが生まれた。')).toBe(true);
 });
 test('the first complete year uses the uncapped infant hazard for all infant relatives', () => {
  for (const relation of ['子', '兄', '姉', '弟', '妹'] as const) {
   const c = born('em_edo', 1700); c.currentYear = 1701;
   const baby: FamilyMember = { id: 'baby', relation, name: 'baby', birthYear: 1700, status: 'alive' };
   c.family = [baby];
   const q0 = hazard(c.environment.region, 0, 1, 50);
   familyTick(c, () => q0 + 0.000001); expect(baby.status).toBe('alive');
   familyTick(c, () => q0 - 0.000001); expect(baby.status).toBe('dead');
  }
 });
 test('adult children remain mortal and spouses have an explicit real birth year', () => {
  const c = born('mod_japan', 1950); c.age = 50; c.currentYear = 2000;
  c.family = [{ id: 'son', relation: '子', name: 'son', birthYear: 1970, status: 'alive' }];
  familyTick(c, () => 0);
  expect(c.family[0].status).toBe('dead');
  resolveChoice(c, { id: 'marry', label: '', subLabel: '', effects: { marry: true }, outcomeText: '' }, () => 0.9);
  expect(c.family.find((f) => f.relation === '妻' || f.relation === '夫')!.birthYear).toBe(c.birthYear);
 });
 test('loss wording adapts when no other living family members remain', () => {
  const c = born('em_edo', 1700); c.age = 20; c.currentYear = 1720;
  c.family = [{ id: 'father', relation: '父', name: '権兵衛', birthYear: 1670, status: 'alive' }];
  const ev = familyTick(c, () => 0)!;
  expect(ev.description.includes('残された家族')).toBe(false);
  expect(ev.choices[0].label).toBe('静まり返った家で、別れの時を過ごす');
 });
});

describe('Calendar environments and sources', () => {
 test('birth identity stays fixed while Japanese environment and decisions cross the era boundary', () => {
  const c = born('ind_japan', 1944); c.family = [];
  const source = c.region;
  stepYear(c, () => 0.99);
  expect(c.era.id).toBe('industrial'); expect(c.region).toBe(source); expect(c.birthYear).toBe(1944);
  expect(c.environment.era.id).toBe('modern'); expect(c.environment.region.id).toBe('mod_japan');
  const draft = ALL_EVENTS.find((e) => e.id === 'industrial_conscription_order')!;
  c.age = 20;
  expect(isEventEligible(c, draft)).toBe(false);
 });
 test('missing successor data does not send a person to another country', () => {
  const c = born('cls_persia', 499); c.currentYear = 500;
  updateEnvironment(c, REGIONS);
  expect(c.environment.era.id).toBe('medieval'); expect(c.environment.region.id).toBe('cls_persia');
  expect(c.environment.coverage).toBe('retained');
 });
 test('annual infant and under-five estimates use the correct country and reference year', () => {
  const c = born('mod_japan', 1960); const birth = c.region;
  c.currentYear = 2000;
  updateEnvironment(c, REGIONS, annualData.series);
  expect(c.environment.region.infantMortality).toBe(annualData.series.japan['2000'][0]);
  expect(c.environment.region.under5Mortality).toBe(annualData.series.japan['2000'][1]);
  expect(c.region).toBe(birth);
  expect(c.environment.region.lifeExpectancyAt15).toBe(birth.lifeExpectancyAt15);
  expect(c.environment.region.statistics.infantMortality.status).toBe('sourced');
  expect(c.environment.region.statistics.infantMortality.period).toEqual([2000, 2000]);
  const future = annualMortalityProfile(birth, 'japan', 2100, annualData.series);
  expect(future.statistics.infantMortality.status).toBe('inherited');
  expect(future.statistics.infantMortality.note).toContain('将来の観測値ではない');
  expect(annualMortalityProfile(birth, 'japan', 1945, annualData.series)).toBe(birth);
 });
 test('all statistic fields have explicit provenance, and every annual series is coherent', () => {
  for (const region of REGIONS) for (const key of STATISTIC_KEYS) {
   const record = region.statistics[key];
   expect(record.period[0]).toBeLessThanOrEqual(record.period[1]);
   expect(record.note.length).toBeGreaterThan(0);
   for (const id of record.sourceIds) expect(id in STATISTIC_SOURCES, `${region.id}/${key}/${id}`).toBe(true);
   // Broad inherited model values must not masquerade as independently sourced country data.
   if (record.status === 'sourced') expect(record.sourceIds.includes('legacy-game-model')).toBe(false);
  }
  for (const years of Object.values(annualData.series)) for (const [year, [imr, u5]] of Object.entries(years)) {
   expect(Number(year)).toBeGreaterThanOrEqual(1960); expect(Number(year)).toBeLessThanOrEqual(2024);
   expect(imr).toBeGreaterThanOrEqual(0); expect(imr).toBeLessThanOrEqual(u5); expect(u5).toBeLessThan(1000);
  }
 });
});


test('an explicit move can change current geography while preserving the birthplace', () => {
 const c = born('em_mughal_india', 1799);
 c.birthCountry = c.currentCountry = 'india';
 const birthplace = c.birthPlace;
 resolveChoice(c, { id: 'move', label: '都市へ', subLabel: '', effects: { locationChange: 'urban' }, outcomeText: '移った。' }, () => 0.45);
 expect(c.place).toBe('ラホール'); expect<CountryId | null>(c.currentCountry).toBe('pakistan');
 expect(c.birthCountry).toBe('india'); expect(c.birthPlace).toBe(birthplace);
});
