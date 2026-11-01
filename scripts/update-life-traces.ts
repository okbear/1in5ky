/** Explicitly accept expected changes to the approved model; review the data/rules first. */
import { rollBirth, stepYear, resolveChoice } from '#lib/engine/engine';
import { ERA_ORDER } from '#lib/data/eras';

if (!Bun.argv.includes('--accept-model-v2')) throw new Error('Usage: bun scripts/update-life-traces.ts --accept-model-v2');
const traces = [];
for (const eraId of ERA_ORDER) for (const seed of [1, 42, 2026, 5000]) {
 let value = seed, calls = 0;
 const rng = () => { calls++; value = (Math.imul(value, 1664525) + 1013904223) >>> 0; return value / 4294967296; };
 const character = rollBirth(rng, eraId);
 let decisions = 0;
 for (let year = 0; year <= 110 && character.alive; year++) {
  const result = stepYear(character, rng);
  if (result.decision) {
   const choices = result.decision.choices;
   resolveChoice(character, choices[decisions++ % choices.length], rng);
  }
 }
 if (character.alive) throw new Error(`Trace did not end: ${eraId}/${seed}`);
 traces.push({ eraId, seed, calls, decisions, digest: new Bun.CryptoHasher('sha256').update(JSON.stringify(character)).digest('hex') });
}
await Bun.write('src/lib/engine/fixtures/life-traces-v2.json', JSON.stringify(traces, null, 2) + '\n');
