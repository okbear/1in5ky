import { expect, test } from 'bun:test';
import { resolveChoice, rollBirth, stepYear } from '#lib/engine/engine';
import traces from '#lib/engine/fixtures/life-traces-v2.json';
import type { EraId } from '#lib/types';

// Model v2 includes calendar environments, national profiles and real family ages.
// The v1 fixture remains archived; this expectation protects the newly approved behavior.
for (const trace of traces) {
	test(`preserves life history: ${trace.eraId}, seed ${trace.seed}`, () => {
		let value = trace.seed;
		let calls = 0;
		const rng = () => {
			calls++;
			value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
			return value / 4294967296;
		};
		const character = rollBirth(rng, trace.eraId as EraId);
		let decisions = 0;
		for (let year = 0; character.alive && year <= 110; year++) {
			const result = stepYear(character, rng);
			if (result.decision) {
				const choices = result.decision.choices;
				resolveChoice(character, choices[decisions++ % choices.length], rng);
			}
		}
		expect(character.alive).toBe(false);
		expect(calls).toBe(trace.calls);
		expect(decisions).toBe(trace.decisions);
		expect(new Bun.CryptoHasher('sha256').update(JSON.stringify(character)).digest('hex')).toBe(trace.digest);
	});
}
