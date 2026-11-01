import { loadBirth } from '#lib/session/loadSimulation';
import { createSessionState, SessionController } from '#lib/session/controller';

export type { Phase } from '#lib/session/controller';

class Game extends SessionController {
	constructor() {
		const state = $state(createSessionState());
		super(state, {
			get rng() { return Math.random; },
			loadBirth,
			schedule: (callback, delayMs) => {
				const timer = window.setTimeout(callback, delayMs);
				return () => window.clearTimeout(timer);
			},
			// Access localStorage lazily: its getter can throw in privacy-restricted contexts.
			storage: {
				getItem: (key) => localStorage.getItem(key),
				setItem: (key, value) => localStorage.setItem(key, value),
				removeItem: (key) => localStorage.removeItem(key)
			}
		});
	}
}

export const game = new Game();
