import annualMortality from '#lib/data/annualMortality.json';
import { ERAS, ERA_ORDER } from '#lib/data/eras';
import { REGIONS } from '#lib/data/regions';
import { ALL_EVENTS } from '#lib/data/events';
import { ERA_CHRONICLES, WORLD_TIMELINE, OVERTURNED_BELIEFS } from '#lib/data/timeline';
import { bindSimulation } from '#lib/engine/simulation';
export { die, type StepResult, type ResolveResult } from '#lib/engine/core';
export { canRevive, revive } from '#lib/engine/mortality';
export { makeIncome } from '#lib/engine/character';
export type { PostMortem } from '#lib/engine/history';

const simulation = bindSimulation({ regions: REGIONS, events: ALL_EVENTS, chronicles: ERA_CHRONICLES, timeline: WORLD_TIMELINE, beliefs: OVERTURNED_BELIEFS, mortality: annualMortality.series });
export const { rollBirth, stepYear, resolveChoice, postMortem } = simulation;
