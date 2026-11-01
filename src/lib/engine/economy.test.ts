import { expect, test } from 'bun:test';
import { rollBirth, resolveChoice, stepYear } from '#lib/engine/engine';
import { financeTick } from '#lib/engine/economy';
import { makeIncome } from '#lib/engine/character';
import type { ChoiceOption } from '#lib/types';

const expense: ChoiceOption = {
 id: 'expense', label: '治療費を払う', subLabel: '', outcomeText: '治療を受けた。',
 effects: { wealthDelta: -60, health: 5 }
};

test('expenses can create debt without cutting income or blocking the choice', () => {
 const c = rollBirth(() => 0.5, 'modern');
 const income = c.annualIncomeUnits;
 c.savings = 0.1;
 resolveChoice(c, expense);
 expect(c.savings).toBeCloseTo(-0.5);
 expect(c.annualIncomeUnits).toBe(income);
 resolveChoice(c, expense);
 expect(c.savings).toBeCloseTo(-1.1);
 expect(c.annualIncomeUnits).toBe(income);
});

test('earning improvements and annual household surplus are separate from reserves', () => {
 const c = rollBirth(() => 0.5, 'modern');
 const income = c.annualIncomeUnits;
 const savings = c.savings;
 resolveChoice(c, { ...expense, effects: { incomeDelta: 20 } });
 expect(c.annualIncomeUnits).toBeCloseTo(Math.round(income * 1.2), -1);
 expect(c.savings).toBe(savings);
 financeTick(c, () => 1);
 expect(c.savings).toBeCloseTo(savings + 0.07);
});

test('sustained debt causes bounded, spaced hardship and offers help and recovery', () => {
 const c = rollBirth(() => 0.5, 'modern');
 c.age = 30; c.savings = -1;
 const health = c.health;
 financeTick(c, (() => { const values = [0, 0.9]; return () => values.shift()!; })());
 expect(c.happiness).toBe(48);
 expect(c.health).toBe(health - 2);
 expect(c.feed[0].text).toContain('借りを返す');
 const count = c.feed.length;
 c.age++;
 financeTick(c, () => { throw new Error('cooldown must skip the event roll'); });
 expect(c.feed).toHaveLength(count);
 c.age += 2;
 const before = c.savings;
 financeTick(c, () => 0);
 expect(c.savings).toBeCloseTo(before + 0.33);
 expect(c.feed[0].text).toContain('融通');
 c.savings = -0.01;
 financeTick(c, () => 1);
 expect(c.savings).toBeGreaterThan(0);
 expect(c.hardshipYears).toBe(0);
 expect(c.feed[0].text).toContain('余裕');
 const recovered = c.happiness;
 financeTick(c, () => 1);
 expect(c.happiness).toBe(recovered);
});

test('empty reserves can trigger hardship without adult health penalties in childhood', () => {
 const c = rollBirth(() => 0.5, 'ancient');
 c.savings = -0.03;
 const health = c.health;
 financeTick(c, (() => { const values = [0, 0.9]; return () => values.shift()!; })());
 expect(c.savings).toBe(0);
 expect(c.hardshipYears).toBe(1);
 expect(c.happiness).toBe(50);
 expect(c.health).toBe(health);
});

test('annual progression applies finances after survival, and labor income starts at 15', () => {
 const c = rollBirth(() => 0.5, 'modern');
 c.age = 13; c.currentYear = c.birthYear + c.age; c.focus = 'labor';
 const before = c.savings;
 stepYear(c, () => 0.99);
 expect(c.incomeMultiplier).toBe(1);
 expect(c.savings).toBeCloseTo(before + 0.03);
 stepYear(c, () => 0.99);
 expect(c.incomeMultiplier).toBeCloseTo(1.02);
 c.savings = -10; makeIncome(c);
 const savings = c.savings;
 stepYear(c, () => 0);
 expect(c.alive).toBe(false);
 expect(c.savings).toBe(savings);
});
