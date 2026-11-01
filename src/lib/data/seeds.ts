import type { MemorialRecord } from '#lib/types';
import { ANCIENT_SEEDS } from '#lib/data/seeds/ancient';
import { CLASSICAL_SEEDS } from '#lib/data/seeds/classical';
import { MEDIEVAL_SEEDS } from '#lib/data/seeds/medieval';
import { EARLY_MODERN_SEEDS } from '#lib/data/seeds/early_modern';
import { INDUSTRIAL_SEEDS } from '#lib/data/seeds/industrial';
import { MODERN_SEEDS } from '#lib/data/seeds/modern';

export const SEED_MEMORIALS: MemorialRecord[] = [
	...ANCIENT_SEEDS,
	...CLASSICAL_SEEDS,
	...MEDIEVAL_SEEDS,
	...EARLY_MODERN_SEEDS,
	...INDUSTRIAL_SEEDS,
	...MODERN_SEEDS
];
