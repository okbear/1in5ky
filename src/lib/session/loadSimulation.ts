import { ERAS, ERA_ORDER } from '#lib/data/eras';
import { weighted, type Rng } from '#lib/engine/util';
import type { EraId, DecisionEvent, RegionProfile, ChronicleTopic } from '#lib/types';
import type { LoadedBirth } from '#lib/engine/world';

const regions: Record<EraId, () => Promise<RegionProfile[]>> = {
 ancient: () => import('#lib/data/regions/ancient').then((m) => m.ANCIENT_REGIONS),
 classical: () => import('#lib/data/regions/classical').then((m) => m.CLASSICAL_REGIONS),
 medieval: () => import('#lib/data/regions/medieval').then((m) => m.MEDIEVAL_REGIONS),
 early_modern: () => import('#lib/data/regions/early_modern').then((m) => m.EARLY_MODERN_REGIONS),
 industrial: () => import('#lib/data/regions/industrial').then((m) => m.INDUSTRIAL_REGIONS),
 modern: () => import('#lib/data/regions/modern').then((m) => m.MODERN_REGIONS)
};
const events: Record<EraId, () => Promise<DecisionEvent[]>> = {
 ancient: () => import('#lib/data/events/ancient').then((m) => m.ANCIENT_EVENTS),
 classical: () => import('#lib/data/events/classical').then((m) => m.CLASSICAL_EVENTS),
 medieval: () => import('#lib/data/events/medieval').then((m) => m.MEDIEVAL_EVENTS),
 early_modern: () => import('#lib/data/events/early_modern').then((m) => m.EARLY_MODERN_EVENTS),
 industrial: () => import('#lib/data/events/industrial').then((m) => m.INDUSTRIAL_EVENTS),
 modern: () => import('#lib/data/events/modern').then((m) => m.MODERN_EVENTS)
};
const chronicles: Record<EraId, () => Promise<ChronicleTopic[]>> = {
 ancient: () => import('#lib/data/chronicles/ancient').then((m) => m.ANCIENT_CHRONICLES),
 classical: () => import('#lib/data/chronicles/classical').then((m) => m.CLASSICAL_CHRONICLES),
 medieval: () => import('#lib/data/chronicles/medieval').then((m) => m.MEDIEVAL_CHRONICLES),
 early_modern: () => import('#lib/data/chronicles/early_modern').then((m) => m.EARLY_MODERN_CHRONICLES),
 industrial: () => import('#lib/data/chronicles/industrial').then((m) => m.INDUSTRIAL_CHRONICLES),
 modern: () => import('#lib/data/chronicles/modern').then((m) => m.MODERN_CHRONICLES)
};

export async function loadBirth(rng: Rng, forceEra?: EraId): Promise<LoadedBirth> {
 const era = forceEra ?? weighted(ERA_ORDER, (id) => ERAS[id].birthSharePercent, rng);
 const index = ERA_ORDER.indexOf(era);
 // At most one era boundary can be crossed during MAX_AGE; preload its data before starting time.
 const eras = ERA_ORDER.slice(index, index + 2);
 const [profiles, specificEvents, topics, broad, common, lifecycleExtra, lifecycle, history, engine, mortality, maternalMortality] = await Promise.all([
  Promise.all(eras.map((id) => regions[id]())),
  Promise.all(eras.map((id) => events[id]())),
  Promise.all(eras.map((id) => chronicles[id]())),
  Promise.all([
   eras.some((id) => id === 'ancient' || id === 'classical' || id === 'medieval') ? import('#lib/data/events/ancient_classical').then((m) => m.ANCIENT_CLASSICAL_EVENTS) : [],
   eras.some((id) => id === 'medieval' || id === 'early_modern') ? import('#lib/data/events/medieval_early_modern').then((m) => m.MEDIEVAL_EARLY_MODERN_EVENTS) : [],
   eras.some((id) => id === 'industrial' || id === 'modern') ? import('#lib/data/events/industrial_modern').then((m) => m.INDUSTRIAL_MODERN_EVENTS) : []
  ]),
  import('#lib/data/events/common_unfair'), import('#lib/data/events/lifecycle_extra'), import('#lib/data/events-lifecycle'),
  import('#lib/data/worldHistory'), import('#lib/engine/simulation'),
  eras.includes('modern') ? import('#lib/data/annualMortality.json').then((m) => m.default.series) : undefined,
  eras.includes('modern') ? import('#lib/data/annualMaternalMortality.json').then((m) => m.default.series) : undefined
 ]);
 const simulation = engine.bindSimulation({
  regions: profiles.flat(),
  events: [...broad.flat(), ...common.COMMON_UNFAIR_EVENTS, ...specificEvents.flat(), ...lifecycleExtra.LIFECYCLE_EXTRA_EVENTS, ...lifecycle.LIFECYCLE_EVENTS],
  chronicles: Object.fromEntries(eras.map((id, i) => [id, topics[i]])),
  timeline: history.WORLD_TIMELINE, beliefs: history.OVERTURNED_BELIEFS, mortality, maternalMortality
 });
 return { character: simulation.rollBirth(rng, era), simulation };
}
