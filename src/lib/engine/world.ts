import type { CountryId, CharacterState, ChoiceOption, ChronicleTopic, DecisionEvent, EraId, PostMortemEvent, RegionProfile } from '#lib/types';
import type { Rng } from '#lib/engine/util';
import type { StepResult, ResolveResult } from '#lib/engine/core';
import type { PostMortem } from '#lib/engine/history';

export type AnnualMortality = Partial<Record<CountryId, Record<string, number[]>>>;

export interface SimulationWorld {
 mortality?: AnnualMortality;
 regions: readonly RegionProfile[];
 events: readonly DecisionEvent[];
 chronicles: Partial<Record<EraId, readonly ChronicleTopic[]>>;
 timeline: readonly PostMortemEvent[];
 beliefs: readonly { until: number; belief: string; overturned: string }[];
}
export interface Simulation {
 rollBirth(rng?: Rng, forceEra?: EraId): CharacterState;
 stepYear(character: CharacterState, rng?: Rng): StepResult;
 resolveChoice(character: CharacterState, choice: ChoiceOption, rng?: Rng): ResolveResult;
 postMortem(character: CharacterState): PostMortem;
 revive(character: CharacterState): boolean;
}
export interface LoadedBirth { character: CharacterState; simulation: Simulation }
