import type { EraId, RegionProfile } from '../types';
import { ANCIENT_REGIONS } from './regions/ancient';
import { CLASSICAL_REGIONS } from './regions/classical';
import { MEDIEVAL_REGIONS } from './regions/medieval';
import { EARLY_MODERN_REGIONS } from './regions/early_modern';
import { INDUSTRIAL_REGIONS } from './regions/industrial';
import { MODERN_REGIONS } from './regions/modern';

export { ANCIENT_REGIONS } from './regions/ancient';
export { CLASSICAL_REGIONS } from './regions/classical';
export { MEDIEVAL_REGIONS } from './regions/medieval';
export { EARLY_MODERN_REGIONS } from './regions/early_modern';
export { INDUSTRIAL_REGIONS } from './regions/industrial';
export { MODERN_REGIONS } from './regions/modern';

export const REGIONS_BY_ERA: Record<EraId, RegionProfile[]> = {
	ancient: ANCIENT_REGIONS,
	classical: CLASSICAL_REGIONS,
	medieval: MEDIEVAL_REGIONS,
	early_modern: EARLY_MODERN_REGIONS,
	industrial: INDUSTRIAL_REGIONS,
	modern: MODERN_REGIONS
};

export const REGIONS: RegionProfile[] = [
	...ANCIENT_REGIONS,
	...CLASSICAL_REGIONS,
	...MEDIEVAL_REGIONS,
	...EARLY_MODERN_REGIONS,
	...INDUSTRIAL_REGIONS,
	...MODERN_REGIONS
];

export const regionsForEra = (eraId: EraId): RegionProfile[] => REGIONS_BY_ERA[eraId];
