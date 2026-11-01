import type { LoadedBirth } from '#lib/engine/world';
import * as simulation from '#lib/engine/engine';
import { describe, expect, test } from 'bun:test';
import { createSessionState, SessionController, type SessionRuntime } from '#lib/session/controller';
import { die, rollBirth } from '#lib/engine/engine';
import type { DecisionEvent } from '#lib/types';

function setup(storage?: SessionRuntime['storage'], loadBirth?: SessionRuntime['loadBirth']) {
	const state = createSessionState();
	const tasks = new Map<number, { callback: () => void; delay: number }>();
	let nextId = 0;
	const game = new SessionController(state, {
		rng: () => 0.99,
		loadBirth: loadBirth ?? ((rng, era) => ({ character: simulation.rollBirth(rng, era), simulation })),
		schedule: (callback, delay) => {
			const id = nextId++;
			tasks.set(id, { callback, delay });
			return () => { tasks.delete(id); };
		},
		storage
	});
	return { game, state, tasks };
}

const childbirth: DecisionEvent = {
	id: 'test-birth', allRegions: true, title: '出産', category: 'livelihood',
	isLifecycle: true, minAge: 18, maxAge: 45, description: '', factBox: '',
	choices: [{ id: 'welcome', label: '迎える', subLabel: '', effects: { addChild: true }, outcomeText: '子を迎えた。' }]
};

describe('Session transitions', () => {
	test('only starts a living character from the birth certificate', async () => {
		const { game, tasks } = setup();
		game.begin();
		expect(game.phase).toBe('intro');
		expect(tasks.size).toBe(0);
		await game.roll('modern');
		expect(game.phase).toBe('cert');
		expect(tasks.size).toBe(0);
		game.begin();
		game.begin();
		expect(game.phase).toBe('life');
		expect(tasks.size).toBe(1);
	});

	test('pause, speed changes, ticks and quitting own at most one timer', async () => {
		const { game, tasks } = setup();
		await game.roll('modern');
		game.begin();
		game.setSpeed(4);
		expect([...tasks.values()][0].delay).toBe(625);
		for (const invalid of [0, -1, NaN, Infinity, 3]) game.setSpeed(invalid);
		expect(game.speed).toBe(4);
		expect(tasks.size).toBe(1);
		game.togglePause();
		expect(tasks.size).toBe(0);
		const age = game.char!.age;
		game.tick();
		expect(game.char!.age).toBe(age);
		game.togglePause();
		[...tasks.values()][0].callback();
		expect(game.char!.age).toBe(age + 1);
		expect(tasks.size).toBe(1);
		game.quit();
		expect(game.phase).toBe('intro');
		expect(game.char).toBeNull();
		expect(tasks.size).toBe(0);
	});

	test('rejects stale, fabricated and duplicate choices; births only follow an active decision', async () => {
		const { game, state, tasks } = setup();
		await game.roll('modern');
		game.begin();
		const choice = childbirth.choices[0];
		game.choose(choice);
		expect(game.char!.family.filter((f) => f.relation === '子')).toHaveLength(0);
		state.decision = childbirth;
		game.stop();
		game.choose({ ...choice, effects: { addChild: true, wealthDelta: 10000 } });
		expect(game.decision).toBe(childbirth);
		expect(game.char!.family.filter((f) => f.relation === '子')).toHaveLength(0);
		game.choose(choice);
		game.choose(choice);
		expect(game.char!.family.filter((f) => f.relation === '子')).toHaveLength(1);
		expect(game.decision).toBeNull();
		expect(tasks.size).toBe(1);
	});

	test('hiding a decision never advances time; choosing while paused preserves pause', async () => {
		const { game, state, tasks } = setup();
		await game.roll('modern');
		game.begin();
		state.decision = childbirth;
		game.stop();
		game.dismissDecision();
		expect(game.decisionHidden).toBe(true);
		const age = game.char!.age;
		game.tick();
		game.fastForward();
		expect(game.char!.age).toBe(age);
		expect(tasks.size).toBe(0);
		game.restoreDecision();
		expect(game.decisionHidden).toBe(false);
		game.togglePause();
		game.choose(childbirth.choices[0]);
		expect(game.paused).toBe(true);
		expect(tasks.size).toBe(0);
	});

	test('timed playback and fast-forward produce identical simulation histories', async () => {
		const timed = setup();
		const fast = setup();
		await timed.game.roll('modern');
		await fast.game.roll('modern');
		timed.game.begin();
		fast.game.begin();
		for (let i = 0; i < 300 && timed.game.phase === 'life'; i++) {
			if (timed.game.decision) timed.game.choose(timed.game.decision.choices[0]);
			else timed.game.tick();
		}
		for (let i = 0; i < 300 && fast.game.phase === 'life'; i++) {
			if (fast.game.decision) fast.game.choose(fast.game.decision.choices[0]);
			else fast.game.fastForward();
		}
		expect(fast.game.phase).toBe('dead');
		expect(fast.game.char).toEqual(timed.game.char);
		expect(fast.game.pm).toEqual(timed.game.pm);
		expect(fast.tasks.size).toBe(0);
		expect(timed.tasks.size).toBe(0);
	});

	test('death replaces the same memorial after revival and storage failures do not block play', async () => {
		const { game, state, tasks } = setup({
			getItem: () => { throw new Error('blocked'); },
			setItem: () => { throw new Error('quota'); },
			removeItem: () => { throw new Error('blocked'); }
		});
		game.hydrate();
		expect(game.memorials).toEqual([]);
		await game.roll('modern');
		game.begin();
		// The existing maximum-age rule ends timed playback and persists the memorial.
		state.char = rollBirth(() => 0.99, 'modern');
		state.char.health = 0;
		state.char.age = 110;
		state.char.currentYear = state.char.birthYear + 110;
		game.tick();
		expect(game.phase).toBe('dead');
		expect(game.memorials).toHaveLength(1);
		expect(tasks.size).toBe(0);
		game.revive();
		expect(game.phase).toBe('dead');
		// Prepare a young deceased character to exercise the existing revival policy.
		state.char.age = 20;
		state.char.currentYear = state.char.birthYear + 20;
		die(state.char, '外傷');
		game.revive();
		expect(game.phase).toBe('life');
		state.char.age = 110;
		state.char.currentYear = state.char.birthYear + 110;
		game.tick();
		expect(game.memorials).toHaveLength(1);
		game.clearMemorials();
		expect(game.memorials).toEqual([]);
	});
});


test('pending data loads are exclusive and cannot resurrect a cancelled session', async () => {
 let complete!: (loaded: LoadedBirth) => void;
 let calls = 0;
 const pending = new Promise<LoadedBirth>((resolve) => { complete = resolve; });
 const { game, tasks } = setup(undefined, () => { calls++; return pending; });
 const first = game.roll('modern');
 await game.roll('modern');
 expect(calls).toBe(1); expect(game.loading).toBe(true);
 game.begin(); expect(tasks.size).toBe(0);
 game.quit();
 complete({ character: simulation.rollBirth(() => 0.5, 'modern'), simulation });
 await first;
 expect(game.phase).toBe('intro'); expect(game.char).toBeNull(); expect(game.loading).toBe(false);
});

test('failed data loads clear the loading state and permit a new attempt', async () => {
 let calls = 0;
 const { game, tasks } = setup(undefined, async (rng, era) => {
  if (calls++ === 0) throw new Error('network failure');
  return { character: simulation.rollBirth(rng, era), simulation };
 });
 await game.roll('modern');
 expect(game.phase).toBe('intro'); expect(game.loading).toBe(false); expect(game.loadError).toBeTruthy();
 expect(tasks.size).toBe(0);
 await game.roll('modern');
 expect(game.phase).toBe('cert'); expect(game.loadError).toBeNull();
});
