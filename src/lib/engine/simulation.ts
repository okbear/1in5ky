import { ERAS, ERA_ORDER } from '#lib/data/eras';
import { createCharacter } from '#lib/engine/character';
import { stepYear, resolveChoice } from '#lib/engine/core';
import { postMortem } from '#lib/engine/history';
import { revive } from '#lib/engine/mortality';
import { weighted } from '#lib/engine/util';
import type { Simulation, SimulationWorld } from '#lib/engine/world';

export function bindSimulation(world: SimulationWorld): Simulation {
 return {
  rollBirth: (rng = Math.random, forceEra) => {
   const era = forceEra ?? weighted(ERA_ORDER, (id) => ERAS[id].birthSharePercent, rng);
   if (!world.regions.some((region) => region.eraId === era)) throw new Error(`Era not loaded: ${era}`);
   return createCharacter(rng, era, world);
  },
  stepYear: (c, rng = Math.random) => stepYear(c, rng, world),
  resolveChoice,
  postMortem: (c) => postMortem(c, world),
  revive
 };
}
