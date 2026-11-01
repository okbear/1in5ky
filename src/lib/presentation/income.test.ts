import { expect, test } from 'bun:test';
import { incomePresentation } from '#lib/presentation/income';
import { rollBirth } from '#lib/engine/engine';
import { REGIONS } from '#lib/data/regions';

test('Japan uses pre-yen units before 1871 and marks the introduction year without converting income', () => {
 const c = rollBirth(() => 0.5, 'industrial');
 c.currentCountry = 'japan';
 c.environment.region = REGIONS.find(region => region.id === 'ind_japan')!;
 const amount = c.annualIncomeUnits;
 for (const year of [1800, 1868, 1870]) {
  c.currentYear = year;
  expect(incomePresentation(c).currency).toBe('金銀銭貨（両・匁・文など）');
  expect(incomePresentation(c).nominal).toBeUndefined();
 }
 c.currentYear = 1871;
 expect(incomePresentation(c).currency).toContain('移行期');
 c.currentYear = 1872;
 expect(incomePresentation(c).currency).toBe('円');
 expect(c.annualIncomeUnits).toBe(amount);
});

test('ancient Egyptian deben is a weight and value unit, not a copper coin', () => {
 const c = rollBirth(() => 0.5, 'ancient');
 c.environment.region = REGIONS.find(region => region.id === 'anc_egypt')!;
 const view = incomePresentation(c);
 expect(view.currency).toContain('重量・価値単位');
 expect(view.currency).not.toContain('銅貨');
 expect(view.nominal).toBeUndefined();
});

test('euro labels follow the cash transition without relabeling inherited nominal amounts', () => {
 const c = rollBirth(() => 0.5, 'modern');
 for (const country of ['france', 'italy', 'germany'] as const) {
  const region = REGIONS.find(region => region.country === country && region.eraId === 'modern')!;
  c.currentCountry = country; c.environment.region = region;
  const originalAmount = c.annualIncomeUnits;
  c.currentYear = 1998;
  expect(incomePresentation(c).currency).not.toContain('ユーロ');
  c.currentYear = 1999;
  expect(incomePresentation(c).currency).toContain('ユーロ（帳簿）');
  c.currentYear = 2002;
  expect(incomePresentation(c).currency).toBe('ユーロ');
  expect(incomePresentation(c).nominal).toBeUndefined();
  expect(c.annualIncomeUnits).toBe(originalAmount);
 }
});

test('nominal amounts require matching sourced unit and time coverage', () => {
 const c = rollBirth(() => 0.5, 'modern');
 const original = REGIONS.find(region => region.id === 'mod_usa')!;
 c.currentCountry = 'usa'; c.currentYear = 2000;
 c.environment.region = { ...original, statistics: { ...original.statistics, annualBaseIncomeUnit: {
  status: 'sourced', period: [2000, 2000], sourceIds: [], note: 'fixture'
 } } };
 expect(incomePresentation(c).nominal?.unit).toBe('米ドル');
 c.currentYear = 2001;
 expect(incomePresentation(c).nominal).toBeUndefined();
});
