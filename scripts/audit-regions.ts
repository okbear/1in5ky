import { REGIONS } from '../src/lib/data/regions';
import { ERAS } from '../src/lib/data/eras';
import { namingPolicy } from '../src/lib/engine/names';

const lines = [
 '# 地域品質監査一覧', '',
 '生成: `bun scripts/audit-regions.ts`。出生対象の全地域を列挙する。これは設定の棚卸しであり、歴史的正確性の合格証ではない。', '',
 '命名は時代末・庶民身分の規則。個人名表示は姓制度未対応を含む。統計の件数はプロファイルの出典状態で、実行時の年次死亡率適用前。', '',
 '## 確認済みの修正と残課題', '',
 '- 現代シリアの通貨を「現地ディナール」から「シリア・ポンド」へ修正。[中央銀行総裁の通貨説明（SANA）](https://sana.sy/en/economic/2288214/)。',
 '- 「旧通貨」や複数通貨の併記は、年代別切替の未対応箇所。名称だけから特定年の換算を保証しない。',
 '- 国別分割で継承した収入単位の値は、その国の名目所得を独立に調査した値ではない。通貨名の修正と金額の較正は別に必要。',
 '- イベントの地域指定だけでは本文中の風習・役職の妥当性を保証しない。本文監査と文化・宗教別の適用条件は引き続き必要。', '',
 '## 全地域', '',
 '| 地域ID | 地域 | 命名 | 通貨 | 出典確認済／継承／推定 |',
 '| --- | --- | --- | --- | --- |'
];
for (const region of REGIONS) {
 const policy = namingPolicy({ region, country: region.country ?? null, year: ERAS[region.eraId].yearEnd, socialClassId: 'peasant' });
 const values = Object.values(region.statistics);
 const counts = ['sourced', 'inherited', 'estimated'].map(status => values.filter(value => value.status === status).length);
 lines.push(`| ${region.id} | ${region.name} | ${policy.convention} | ${region.currencyUnit} | ${counts.join(' / ')} |`);
}
await Bun.write(new URL('../docs/region-quality-audit.md', import.meta.url), lines.join('\n') + '\n');
console.log(`${REGIONS.length}地域の監査一覧を更新しました。`);
