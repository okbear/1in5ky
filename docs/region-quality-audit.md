# 地域品質監査一覧

生成: `bun scripts/audit-regions.ts`。出生対象の全地域を列挙する。これは設定の棚卸しであり、歴史的正確性の合格証ではない。

命名は時代末・庶民身分の規則。個人名表示は姓制度未対応を含む。統計の件数はプロファイルの出典状態で、実行時の年次死亡率適用前。

## 確認済みの修正と残課題

- 現代シリアの通貨を「現地ディナール」から「シリア・ポンド」へ修正。[中央銀行総裁の通貨説明（SANA）](https://sana.sy/en/economic/2288214/)。
- 「旧通貨」や複数通貨の併記は、年代別切替の未対応箇所。名称だけから特定年の換算を保証しない。
- 国別分割で継承した収入単位の値は、その国の名目所得を独立に調査した値ではない。通貨名の修正と金額の較正は別に必要。
- イベントの地域指定だけでは本文中の風習・役職の妥当性を保証しない。本文監査と文化・宗教別の適用条件は引き続き必要。

## 全地域

| 地域ID | 地域 | 命名 | 通貨 | 出典確認済／継承／推定 |
| --- | --- | --- | --- | --- |
| anc_mesopotamia | メソポタミア | personal-only | 大麦（シラ） | 0 / 0 / 10 |
| anc_egypt | エジプト | personal-only | デベン銅貨・穀物配給 | 0 / 0 / 10 |
| anc_china | 黄河・長江流域 | personal-only | 貝貨・粟 | 0 / 0 / 10 |
| anc_indus | インダス流域 | personal-only | 穀物・家畜 | 0 / 0 / 10 |
| anc_aegean | エーゲ海世界 | personal-only | 穀物・家畜 | 0 / 0 / 10 |
| cls_rome | ローマ帝国 | personal-only | デナリウス銀貨 | 0 / 0 / 10 |
| cls_han | 秦・漢帝国 | chinese | 五銖銭 | 0 / 0 / 10 |
| cls_india | インド亜大陸 | personal-only | パナ銀貨 | 0 / 0 / 10 |
| cls_persia | ペルシア・中央アジア | personal-only | 銀貨・穀物 | 0 / 0 / 10 |
| cls_mesoamerica | 古典期メソアメリカ | personal-only | カカオ・布・物々交換 | 0 / 0 / 10 |
| cls_africa | アクスム・紅海沿岸 | personal-only | 金銀貨・穀物 | 0 / 0 / 10 |
| cls_yayoi | 弥生時代の日本 | personal-only | 米・布・物々交換 | 0 / 0 / 10 |
| med_britain | 中世ブリテン | personal-only | ポンド・シリング | 0 / 10 / 0 |
| med_france | 中世フランス | personal-only | リーブル・フラン | 0 / 10 / 0 |
| med_germany | 中世ドイツ地域 | personal-only | 銀貨・マルク | 0 / 10 / 0 |
| med_italy | 中世イタリア地域 | personal-only | フローリン・リラ | 0 / 10 / 0 |
| med_iraq | 中世イラク | personal-only | ディルハム銀貨 | 0 / 10 / 0 |
| med_egypt | 中世エジプト | personal-only | ディルハム銀貨 | 0 / 10 / 0 |
| med_andalus | 中世アンダルス | personal-only | ディルハム銀貨 | 0 / 10 / 0 |
| med_central_asia | 中世中央アジア | personal-only | ディルハム銀貨 | 0 / 10 / 0 |
| med_china | 中国（唐・宋・元・明初） | chinese | 銅銭（貫）・交子（紙幣） | 0 / 0 / 10 |
| med_japan | 日本（平安〜鎌倉・室町） | personal-only | 米（石）・宋銭（文） | 0 / 0 / 10 |
| med_india | 中世南アジア | personal-only | タンカ銀貨・穀物 | 0 / 0 / 10 |
| med_west_africa | 中世西アフリカ | personal-only | 金・岩塩・貝貨 | 0 / 0 / 10 |
| med_east_africa | スワヒリ海岸 | personal-only | 布・貝貨・金 | 0 / 0 / 10 |
| med_mesoamerica | 中世メソアメリカ | personal-only | カカオ・綿布 | 0 / 0 / 10 |
| med_andes | 中世アンデス | personal-only | 労役・織物・物々交換 | 0 / 0 / 10 |
| med_southeast_asia | アンコール・大陸東南アジア | personal-only | 米・布・銀 | 0 / 0 / 10 |
| em_edo | 江戸時代の日本 | personal-only | 米（石）・銭（文） | 0 / 0 / 10 |
| em_china | 中国（明・清） | chinese | 銀（両）・銅銭（文） | 0 / 0 / 10 |
| em_mughal_india | ムガル帝国・南アジア | personal-only | ルピー銀貨・ダム銅貨 | 0 / 0 / 10 |
| em_britain | 近世ブリテン | personal-only | ポンド・シリング | 0 / 10 / 0 |
| em_france | 近世フランス | personal-only | リーブル・フラン | 0 / 10 / 0 |
| em_germany | 近世ドイツ地域 | personal-only | 銀貨・マルク | 0 / 10 / 0 |
| em_italy | 近世イタリア地域 | personal-only | フローリン・リラ | 0 / 10 / 0 |
| em_netherlands | 近世ネーデルラント | personal-only | ギルダー | 0 / 10 / 0 |
| em_west_africa | 近世西アフリカ | personal-only | 布・貝貨・金 | 0 / 0 / 10 |
| em_caribbean | カリブ海・ブラジル農園地帯 | personal-only | 砂糖・銀貨 | 0 / 0 / 10 |
| em_andes | 近世アンデス植民地 | personal-only | ペソ銀貨 | 0 / 0 / 10 |
| em_mesoamerica | 近世メソアメリカ植民地 | personal-only | ペソ銀貨 | 0 / 0 / 10 |
| em_north_america | 北米大西洋岸・ハドソン湾交易圏 | personal-only | 毛皮・シリング | 0 / 0 / 10 |
| ind_britain | 近代ブリテン | personal-only | ポンド・シリング | 0 / 10 / 0 |
| ind_france | 近代フランス | personal-only | リーブル・フラン | 0 / 10 / 0 |
| ind_germany | 近代ドイツ地域 | personal-only | 銀貨・マルク | 0 / 10 / 0 |
| ind_italy | 近代イタリア地域 | personal-only | フローリン・リラ | 0 / 10 / 0 |
| ind_usa | 近代アメリカ合衆国 | personal-only | 米ドル | 0 / 10 / 0 |
| ind_canada | 近代カナダ | personal-only | カナダドル | 0 / 10 / 0 |
| ind_japan | 日本（幕末〜明治・大正） | japanese | 円 | 0 / 0 / 10 |
| ind_china | 中国（清末〜民国） | chinese | 銀元・銅銭 | 0 / 0 / 10 |
| ind_india | 英領インド | personal-only | ルピー | 0 / 0 / 10 |
| ind_malaya | 近代マレー半島 | personal-only | 海峡ドル | 0 / 10 / 0 |
| ind_java | 近代ジャワ | personal-only | 蘭印ギルダー | 0 / 10 / 0 |
| ind_russia | 近代ロシア | personal-only | ルーブル | 0 / 0 / 10 |
| ind_egypt | 近代エジプト | personal-only | エジプト・ポンド | 0 / 0 / 10 |
| ind_congo | 近代コンゴ | personal-only | 物々交換・フラン | 0 / 0 / 10 |
| ind_mexico | 近代メキシコ | personal-only | 現地ペソ・旧通貨 | 0 / 10 / 0 |
| ind_brazil | 近代ブラジル | personal-only | レアル・旧現地通貨 | 0 / 10 / 0 |
| ind_argentina | 近代アルゼンチン | personal-only | 現地ペソ・旧通貨 | 0 / 10 / 0 |
| ind_peru | 近代ペルー | personal-only | ソル・旧通貨 | 0 / 10 / 0 |
| mod_japan | 日本 | japanese | 円 | 0 / 0 / 10 |
| mod_china | 現代中国 | chinese | 元 | 0 / 0 / 10 |
| mod_taiwan | 現代台湾 | chinese | 台湾ドル | 0 / 0 / 10 |
| mod_korea | 現代韓国 | korean | ウォン | 0 / 0 / 10 |
| mod_india | 現代インド | personal-only | インド・ルピー | 0 / 10 / 0 |
| mod_pakistan | 現代パキスタン | personal-only | パキスタン・ルピー | 0 / 10 / 0 |
| mod_bangladesh | 現代バングラデシュ | personal-only | タカ | 0 / 10 / 0 |
| mod_indonesia | 現代インドネシア | personal-only | ルピア | 0 / 10 / 0 |
| mod_philippines | 現代フィリピン | personal-only | フィリピン・ペソ | 0 / 10 / 0 |
| mod_thailand | 現代タイ | personal-only | バーツ | 0 / 10 / 0 |
| mod_vietnam | 現代ベトナム | personal-only | ドン | 0 / 10 / 0 |
| mod_malaysia | 現代マレーシア | personal-only | リンギット | 0 / 10 / 0 |
| mod_nigeria | 現代ナイジェリア | personal-only | ナイラ・旧通貨 | 0 / 10 / 0 |
| mod_ghana | 現代ガーナ | personal-only | セディ・旧通貨 | 0 / 10 / 0 |
| mod_kenya | 現代ケニア | personal-only | ケニア・シリング | 0 / 10 / 0 |
| mod_congo | 現代コンゴ民主共和国 | personal-only | コンゴ・フラン・旧通貨 | 0 / 10 / 0 |
| mod_senegal | 現代セネガル | personal-only | CFAフラン | 0 / 10 / 0 |
| mod_south_africa | 現代南アフリカ | personal-only | ランド・旧通貨 | 0 / 10 / 0 |
| mod_egypt | 現代エジプト | personal-only | エジプト・ポンド | 0 / 10 / 0 |
| mod_iraq | 現代イラク | personal-only | 現地ディナール | 0 / 10 / 0 |
| mod_jordan | 現代ヨルダン | personal-only | 現地ディナール | 0 / 10 / 0 |
| mod_tunisia | 現代チュニジア | personal-only | 現地ディナール | 0 / 10 / 0 |
| mod_libya | 現代リビア | personal-only | 現地ディナール | 0 / 10 / 0 |
| mod_syria | 現代シリア | personal-only | シリア・ポンド | 0 / 10 / 0 |
| mod_britain | 現代ブリテン | personal-only | ポンド | 0 / 10 / 0 |
| mod_france | 現代フランス | personal-only | ユーロ・旧現地通貨 | 0 / 10 / 0 |
| mod_germany | 現代ドイツ地域 | personal-only | ユーロ・旧現地通貨 | 0 / 10 / 0 |
| mod_italy | 現代イタリア地域 | personal-only | ユーロ・旧現地通貨 | 0 / 10 / 0 |
| mod_usa | 現代アメリカ合衆国 | personal-only | 米ドル | 0 / 10 / 0 |
| mod_canada | 現代カナダ | personal-only | カナダドル | 0 / 10 / 0 |
| mod_brazil | 現代ブラジル | personal-only | レアル・旧現地通貨 | 0 / 10 / 0 |
| mod_mexico | 現代メキシコ | personal-only | 現地ペソ・旧通貨 | 0 / 10 / 0 |
| mod_argentina | 現代アルゼンチン | personal-only | 現地ペソ・旧通貨 | 0 / 10 / 0 |
| mod_colombia | 現代コロンビア | personal-only | 現地ペソ・旧通貨 | 0 / 10 / 0 |
| mod_russia | 現代ロシア | personal-only | ルーブル | 0 / 10 / 0 |
| mod_ukraine | 現代ウクライナ | personal-only | ルーブル・フリヴニャ | 0 / 10 / 0 |
| mod_belarus | 現代ベラルーシ | personal-only | ルーブル | 0 / 10 / 0 |
| mod_kazakhstan | 現代カザフスタン | personal-only | ルーブル・テンゲ | 0 / 10 / 0 |
