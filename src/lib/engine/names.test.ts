import { describe, expect, test } from 'bun:test';
import { REGIONS } from '#lib/data/regions';
import { ERAS } from '#lib/data/eras';
import { ERA_GROWTH_RATIO } from '#lib/engine/util';
import { bindSimulation } from '#lib/engine/simulation';
import { namingPolicy, formatPersonalName, contextFor } from '#lib/engine/names';
import type { RegionId, SocialClassId, CharacterState } from '#lib/types';

function birth(id: RegionId, year: number, sex: 'M' | 'F' = 'M', socialClassId: SocialClassId = 'peasant', seed = 42) {
 const region = REGIONS.find((r) => r.id === id)!;
 const era = ERAS[region.eraId];
 const index = region.classes.findIndex((entry) => entry.id === socialClassId);
 const total = region.classes.reduce((sum, entry) => sum + entry.share, 0);
 const classRoll = (region.classes.slice(0, index).reduce((sum, entry) => sum + entry.share, 0) + region.classes[index].share / 2) / total;
 const fraction = (year - era.yearStart + 0.5) / (era.yearEnd - era.yearStart + 1);
 const yearRoll = (Math.exp(Math.log(ERA_GROWTH_RATIO[era.id]) * fraction) - 1) / (ERA_GROWTH_RATIO[era.id] - 1);
 const values = [0.1, classRoll, sex === 'M' ? 0.1 : 0.9, yearRoll, 0.99, 0.1];
 let position = 0, state = seed;
 const rng = () => {
  if (position < values.length) return values[position++];
  state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
  return state / 4294967296;
 };
 const simulation = bindSimulation({ regions: [region], events: [], chronicles: {}, timeline: [], beliefs: [] });
 const c = simulation.rollBirth(rng, era.id);
 expect(c.birthYear).toBe(year); expect(c.sex).toBe(sex);
 return { c, simulation };
}
const marry = { id: 'marry', label: '結婚する', subLabel: '', effects: { marry: true }, outcomeText: '所帯を持った。' };
const giveBirth = { id: 'birth', label: '迎える', subLabel: '', effects: { addChild: true }, outcomeText: '子を迎えた。' };
const becomeAdult = (c: CharacterState, age = 25) => { c.age = age; c.currentYear = c.birthYear + age; };

for (const id of ['cls_han', 'med_china', 'em_china', 'ind_china', 'mod_china', 'mod_taiwan', 'mod_korea'] as const) {
 test(`${id}: surname is inherited rather than redrawn independently for each relative`, () => {
  const years = { cls_han: 100, med_china: 1000, em_china: 1700, ind_china: 1900, mod_china: 1970, mod_taiwan: 1970, mod_korea: 1970 };
  for (const seed of [1, 42, 2026]) {
   const { c } = birth(id, years[id], 'M', 'peasant', seed);
   expect(c.nameParts.familyName).toBeDefined();
   for (const f of c.family.filter((m) => ['父', '兄', '姉', '弟', '妹'].includes(m.relation))) expect(f.nameParts!.familyName).toBe(c.nameParts.familyName);
   const mother = c.family.find((f) => f.relation === '母')!;
   expect(mother.nameParts!.familyName).toBe(mother.nameParts!.birthFamilyName);
   for (const f of c.family) expect(f.name).toBe(formatPersonalName(f.nameParts!));
   expect(new Set([c.name, ...c.family.map((f) => f.name)]).size).toBe(c.family.length + 1);
  }
 });
}

describe('Marriage and children', () => {
 for (const sex of ['M', 'F'] as const) test(`Chinese ${sex}: spouse keeps their surname; children follow the father`, () => {
  const { c, simulation } = birth('mod_china', 1970, sex);
  becomeAdult(c);
  const original = c.name;
  simulation.resolveChoice(c, marry, () => 0.8);
  const spouse = c.family.find((f) => f.relation === '妻' || f.relation === '夫')!;
  expect(c.name).toBe(original);
  expect(spouse.nameParts!.familyName).toBe(spouse.nameParts!.birthFamilyName);
  simulation.resolveChoice(c, giveBirth, () => 0.7);
  expect(c.family.find((f) => f.relation === '子')!.nameParts!.familyName).toBe(sex === 'M' ? c.nameParts.familyName : spouse.nameParts!.familyName);
 });
 for (const sex of ['M', 'F'] as const) test(`modern Japanese ${sex}: new couple shares a surname without renaming the birth family`, () => {
  const { c, simulation } = birth('mod_japan', 1970, sex);
  const original = c.name;
  const father = c.family.find((f) => f.relation === '父')!;
  const mother = c.family.find((f) => f.relation === '母')!;
  const fatherName = father.name;
  expect(mother.nameParts!.familyName).toBe(father.nameParts!.familyName);
  becomeAdult(c);
  simulation.resolveChoice(c, marry, () => 0.9);
  const spouse = c.family.find((f) => f.relation === '妻' || f.relation === '夫')!;
  expect(c.nameParts.familyName).toBe(spouse.nameParts!.familyName);
  expect(c.birthName).toBe(original); expect(father.name).toBe(fatherName);
  simulation.resolveChoice(c, giveBirth, () => 0.7);
  expect(c.family.find((f) => f.relation === '子')!.nameParts!.familyName).toBe(c.nameParts.familyName);
  if (sex === 'F') {
   expect(c.name).not.toBe(c.birthName);
   expect(c.feed.some((f) => f.text.includes('名前が変わった'))).toBe(true);
  }
 });
 test('remarriage does not retroactively change existing children or deceased relatives', () => {
  const { c, simulation } = birth('mod_japan', 1970, 'F'); becomeAdult(c);
  simulation.resolveChoice(c, marry, () => 0.9);
  simulation.resolveChoice(c, giveBirth, () => 0.7);
  const firstSpouse = c.family.find((f) => f.relation === '夫')!;
  const firstChild = c.family.find((f) => f.relation === '子')!;
  const previousSpouseName = firstSpouse.name, childName = firstChild.name;
  firstSpouse.status = 'dead'; firstSpouse.deathYear = c.currentYear;
  simulation.resolveChoice(c, marry, () => 0.2);
  expect(firstSpouse.name).toBe(previousSpouseName); expect(firstChild.name).toBe(childName);
  simulation.resolveChoice(c, giveBirth, () => 0.4);
  const children = c.family.filter((f) => f.relation === '子');
  expect(children[1].nameParts!.familyName).toBe(c.nameParts.familyName);
  expect(children[0].name).toBe(childName);
 });
});

describe('Naming customs by period', () => {
 test('Edo commoners keep personal-name display; upper-status families can have a surname', () => {
  const common = birth('em_edo', 1700).c;
  const elite = birth('em_edo', 1700, 'M', 'elite').c;
  expect(common.nameParts.familyName).toBeUndefined();
  expect(common.name).toBe(common.nameParts.givenName);
  expect(elite.nameParts.familyName).toBeDefined();
  expect(namingPolicy(contextFor(elite)).marriedSurname).toBe('retain');
 });
 test('surname public-use adoption in 1875 preserves birth names and the names of the dead', () => {
  const { c, simulation } = birth('ind_japan', 1874);
  const original = c.birthName;
  const father = c.family.find((f) => f.relation === '父')!;
  father.status = 'dead'; father.deathYear = 1874;
  const deadName = father.name;
  simulation.stepYear(c, () => 0.99);
  expect(c.currentYear).toBe(1875); expect(c.nameParts.familyName).toBeDefined();
  expect(c.birthName).toBe(original); expect(father.name).toBe(deadName);
  expect(c.feed.some((f) => f.text.includes('名字を公称'))).toBe(true);
 });
 test('1876 Japanese couples retain birth surnames; the later household rule takes effect in 1898', () => {
  const { c, simulation } = birth('ind_japan', 1876, 'F'); becomeAdult(c, 20);
  simulation.resolveChoice(c, marry, () => 0.9);
  const original = c.name;
  const spouse = c.family.find((f) => f.relation === '夫')!;
  expect(spouse.nameParts!.familyName).toBe(spouse.nameParts!.birthFamilyName);
  expect(c.nameParts.familyName).toBe(c.nameParts.birthFamilyName);
  simulation.stepYear(c, () => 0.99); simulation.stepYear(c, () => 0.99);
  expect(c.currentYear).toBe(1898); expect(c.nameParts.familyName).toBe(spouse.nameParts!.familyName);
  expect(c.birthName).toBe(original);
 });
 test('unmodelled cultures are not forced into a modern surname system', () => {
  for (const [id, year] of [['anc_egypt', -1000], ['anc_china', -1000], ['mod_indonesia', 1970]] as const) {
   const { c } = birth(id, year);
   expect(c.nameParts.convention).toBe('personal-only'); expect(c.nameParts.familyName).toBeUndefined();
  }
 });
});
