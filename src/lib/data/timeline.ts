import type { ChronicleTopic, EraId, PostMortemEvent } from '#lib/types';
import { ANCIENT_CHRONICLES } from '#lib/data/chronicles/ancient';
import { CLASSICAL_CHRONICLES } from '#lib/data/chronicles/classical';
import { MEDIEVAL_CHRONICLES } from '#lib/data/chronicles/medieval';
import { EARLY_MODERN_CHRONICLES } from '#lib/data/chronicles/early_modern';
import { INDUSTRIAL_CHRONICLES } from '#lib/data/chronicles/industrial';
import { MODERN_CHRONICLES } from '#lib/data/chronicles/modern';

/** 死後の世界「あなたが死んだあと、世界はどうなったか」に使う世界史年表 */
export { WORLD_TIMELINE, OVERTURNED_BELIEFS } from '#lib/data/worldHistory';

/** 生きているあいだ右カラム「世界の出来事」に順次流れてくる時代別の世界史トピック（時代別ファイルを集約） */
export const ERA_CHRONICLES: Record<EraId, ChronicleTopic[]> = {
	ancient: ANCIENT_CHRONICLES,
	classical: CLASSICAL_CHRONICLES,
	medieval: MEDIEVAL_CHRONICLES,
	early_modern: EARLY_MODERN_CHRONICLES,
	industrial: INDUSTRIAL_CHRONICLES,
	modern: MODERN_CHRONICLES
};

/** 時代ごとの「あなたが信じていたことが覆された」一言。 */


/** 5000年のタイムラインに最初から刻まれている「名もなき人々」の墓標（時代別ファイルを集約） */
export { SEED_MEMORIALS } from '#lib/data/seeds';
