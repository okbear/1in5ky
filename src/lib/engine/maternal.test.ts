import { expect, test } from 'bun:test';
import data from '#lib/data/annualMaternalMortality.json';
import { maternalRisk, maternalChoice } from '#lib/engine/maternal';
import { rollBirth } from '#lib/engine/engine';
import type { AnnualMortality } from '#lib/engine/world';
import type { ChoiceOption } from '#lib/types';

test('maternal data has valid per-100000 estimates and explicit provenance', () => {
 expect(data.indicators).toEqual(['SH.STA.MMRT']);
 expect(data.edition).toContain('MMEIG');
 for (const points of Object.values(data.series)) for (const [year, values] of Object.entries(points)) {
  expect(Number(year)).toBeGreaterThanOrEqual(1985);
  expect(values).toHaveLength(1);
  expect(Number.isFinite(values[0])).toBe(true);
  expect(values[0]).toBeGreaterThanOrEqual(0);
  expect(values[0]).toBeLessThan(100000);
 }
});

test('maternal risk uses current country and year without borrowing another country or future history', () => {
 const c = rollBirth(() => 0.5, 'modern');
 const series: AnnualMortality = { japan: { '2000': [10], '2001': [5] }, nigeria: { '2000': [1000] } };
 c.currentCountry = 'japan'; c.currentYear = 2000;
 expect(maternalRisk(c, series).probability).toBe(0.0001);
 c.currentCountry = 'nigeria';
 expect(maternalRisk(c, series).probability).toBe(0.01);
 c.currentCountry = 'japan'; c.currentYear = 1999;
 expect(maternalRisk(c, series).probability).toBe(0.004);
 c.currentYear = 2030;
 expect(maternalRisk(c, series).probability).toBe(0.00005);
 expect(maternalRisk(c, series).note).toContain('据え置く');
 c.currentCountry = 'taiwan';
 expect(maternalRisk(c, series).probability).toBe(0.004);
});

test('both parental perspectives use the same maternal risk and leave unrelated choices untouched', () => {
 const c = rollBirth(() => 0.5, 'modern');
 c.currentCountry = 'japan'; c.currentYear = 2000;
 const series: AnnualMortality = { japan: { '2000': [10] } };
 const choice: ChoiceOption = { id: 'birth', label: '', subLabel: '', effects: { addChild: true }, outcomeText: '', maternalRisk: true };
 c.sex = 'F';
 expect(maternalChoice(c, choice, series).survivalChance).toBe(0.9999);
 c.sex = 'M';
 expect(maternalChoice(c, choice, series).effects.killSpouseChance).toBe(0.0001);
 const wait = { ...choice, maternalRisk: undefined };
 expect(maternalChoice(c, wait, series)).toBe(wait);
 expect(choice.effects.killSpouseChance).toBeUndefined();
});
