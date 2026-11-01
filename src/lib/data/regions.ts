import { ERA_ORDER } from '#lib/data/eras';
import type { EraId, RegionProfile } from '#lib/types';
import { ANCIENT_REGIONS } from '#lib/data/regions/ancient';
import { CLASSICAL_REGIONS } from '#lib/data/regions/classical';
import { MEDIEVAL_REGIONS } from '#lib/data/regions/medieval';
import { EARLY_MODERN_REGIONS } from '#lib/data/regions/early_modern';
import { INDUSTRIAL_REGIONS } from '#lib/data/regions/industrial';
import { MODERN_REGIONS } from '#lib/data/regions/modern';

const REGIONS_BY_ERA: Record<EraId, RegionProfile[]> = {
	ancient: ANCIENT_REGIONS,
	classical: CLASSICAL_REGIONS,
	medieval: MEDIEVAL_REGIONS,
	early_modern: EARLY_MODERN_REGIONS,
	industrial: INDUSTRIAL_REGIONS,
	modern: MODERN_REGIONS
};

export const REGIONS: RegionProfile[] = ERA_ORDER.flatMap((eraId) => REGIONS_BY_ERA[eraId]);

export const regionsForEra = (eraId: EraId): RegionProfile[] => REGIONS_BY_ERA[eraId];
