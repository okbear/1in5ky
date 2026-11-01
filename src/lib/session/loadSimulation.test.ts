import { expect, test } from 'bun:test';
import { loadBirth } from '#lib/session/loadSimulation';
import * as eager from '#lib/engine/engine';
import { ERA_ORDER } from '#lib/data/eras';

function random(seed: number) {
 let value = seed, calls = 0;
 return { rng: () => { calls++; value = (Math.imul(value, 1664525) + 1013904223) >>> 0; return value / 4294967296; }, calls: () => calls };
}

for (const era of ERA_ORDER) test(`lazy and full catalogs simulate the same ${era} lives`, async () => {
 for (const seed of [1, 42, 2026, 5000]) {
  const a = random(seed), b = random(seed);
  const expected = eager.rollBirth(a.rng, era);
  const { character, simulation } = await loadBirth(b.rng, era);
  let choice = 0;
  for (let year = 0; year <= 110 && expected.alive; year++) {
   const e = eager.stepYear(expected, a.rng), actual = simulation.stepYear(character, b.rng);
   expect(actual.decision?.id).toBe(e.decision?.id);
   if (e.decision) {
    eager.resolveChoice(expected, e.decision.choices[choice % e.decision.choices.length], a.rng);
    simulation.resolveChoice(character, actual.decision!.choices[choice % actual.decision!.choices.length], b.rng);
    choice++;
   }
  }
  expect(character).toEqual(expected);
  expect(simulation.postMortem(character)).toEqual(eager.postMortem(expected));
  expect(b.calls()).toBe(a.calls());
 }
});
