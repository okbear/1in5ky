import type { DecisionEvent } from '../types';
import { ANCIENT_CLASSICAL_EVENTS } from './events/ancient_classical';
import { MEDIEVAL_EARLY_MODERN_EVENTS } from './events/medieval_early_modern';
import { INDUSTRIAL_MODERN_EVENTS } from './events/industrial_modern';
import { COMMON_UNFAIR_EVENTS } from './events/common_unfair';
import { ANCIENT_EVENTS } from './events/ancient';
import { CLASSICAL_EVENTS } from './events/classical';
import { MEDIEVAL_EVENTS } from './events/medieval';
import { EARLY_MODERN_EVENTS } from './events/early_modern';
import { INDUSTRIAL_EVENTS } from './events/industrial';
import { MODERN_EVENTS } from './events/modern';
import { LIFECYCLE_EXTRA_EVENTS } from './events/lifecycle_extra';
import { LIFECYCLE_EVENTS } from './events-lifecycle';

/**
 * 時代・地域・環境に応じたすべての決断イベント。
 * モジュール分割された各時代・テーマのイベントを単一配列へ統合して提供する。
 * 歴史の大波は先頭から最初に発火条件を満たしたものが選ばれるため、既存の総括的な波を先に置く。
 */
export const ALL_EVENTS: DecisionEvent[] = [
	...ANCIENT_CLASSICAL_EVENTS,
	...MEDIEVAL_EARLY_MODERN_EVENTS,
	...INDUSTRIAL_MODERN_EVENTS,
	...COMMON_UNFAIR_EVENTS,
	...ANCIENT_EVENTS,
	...CLASSICAL_EVENTS,
	...MEDIEVAL_EVENTS,
	...EARLY_MODERN_EVENTS,
	...INDUSTRIAL_EVENTS,
	...MODERN_EVENTS,
	...LIFECYCLE_EXTRA_EVENTS,
	...LIFECYCLE_EVENTS
];
