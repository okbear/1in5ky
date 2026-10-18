import type { DecisionEvent } from '../types';
import { ANCIENT_CLASSICAL_EVENTS } from './events/ancient_classical';
import { MEDIEVAL_EARLY_MODERN_EVENTS } from './events/medieval_early_modern';
import { INDUSTRIAL_MODERN_EVENTS } from './events/industrial_modern';
import { COMMON_UNFAIR_EVENTS } from './events/common_unfair';
import { LIFECYCLE_EVENTS } from './events-lifecycle';

export { ANCIENT_CLASSICAL_EVENTS } from './events/ancient_classical';
export { MEDIEVAL_EARLY_MODERN_EVENTS } from './events/medieval_early_modern';
export { INDUSTRIAL_MODERN_EVENTS } from './events/industrial_modern';
export { COMMON_UNFAIR_EVENTS } from './events/common_unfair';
export { LIFECYCLE_EVENTS } from './events-lifecycle';

/**
 * 時代・地域・環境に応じたすべての決断イベント。
 * モジュール分割された各時代・テーマのイベントを単一配列へ統合して提供する。
 */
export const ALL_EVENTS: DecisionEvent[] = [
	...ANCIENT_CLASSICAL_EVENTS,
	...MEDIEVAL_EARLY_MODERN_EVENTS,
	...INDUSTRIAL_MODERN_EVENTS,
	...COMMON_UNFAIR_EVENTS,
	...LIFECYCLE_EVENTS
];

export const WAVE_EVENTS = ALL_EVENTS.filter((e) => e.isHistoricalWave);
export const UNFAIR_EVENTS = ALL_EVENTS.filter((e) => !e.isHistoricalWave && !e.isLifecycle);
export const EVENTS = ALL_EVENTS;
