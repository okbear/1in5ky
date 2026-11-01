import { ALL_EVENTS } from '../src/lib/data/events';
import { INSTITUTIONS } from '../src/lib/data/institutions';

const escape = (value: string) => value.replaceAll('|', '／').replaceAll('\n', ' ');
const lines = [
 '# 全イベントの適用条件一覧', '',
 '生成: `bun scripts/audit-events.ts`。集約後の地域・年代・制度条件を一覧化する。各本文の史実監査の合格を意味しない。', '',
 '「時代内」は明示の年範囲がないもの。制度条件の採用年も併記する。地域内の全住民が制度対象であることや、本文中の移動・職業が実装されていることは保証しない。', '',
 '| ID | 題名 | 地域 | 年代 | 場所・都市農村 | 身分・性別 | 制度 |',
 '| --- | --- | --- | --- | --- | --- | --- |'
];
for (const event of ALL_EVENTS) {
 const institutions = (event.requiresInstitutions ?? []).map(id => `${id} (${INSTITUTIONS[id].yearRange.join('〜')})`);
 lines.push([
  event.id, event.title, event.regionIds?.join('、') ?? '全地域共通',
  `${event.eraIds?.join('、') ?? '全時代'} / ${event.yearRange?.join('〜') ?? '時代内'}`,
  [...(event.places ?? []), ...(event.isUrban === undefined ? [] : [event.isUrban ? '都市のみ' : '農村のみ'])].join('、') || '指定なし',
  [event.classIds?.join('、') ?? '全身分', event.sex ?? '男女'].join(' / '),
  institutions.join('、') || '指定なし'
 ].map(escape).join(' | ').replace(/^/, '| ').replace(/$/, ' |'));
}
await Bun.write(new URL('../docs/event-scope-inventory.md', import.meta.url), lines.join('\n') + '\n');
console.log(`${ALL_EVENTS.length}件のイベント適用条件を更新しました。`);
