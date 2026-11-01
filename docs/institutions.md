# 制度の適用条件

`InstitutionId` は有限のユニオン型。`data/institutions.ts` に地域ID、適用年、必要な場合の場所、出典URL、適用範囲の注記を保持する。各イベントの `requiresInstitutions` は指定した全制度の条件を満たす必要がある。

照合は `engine/eventScope.ts` に集約し、既存の時代・地域・場所・年の条件と同時に適用する。歴史事件、ライフサイクル、通常イベントで同じ判定を使う。制度の条件はイベントの地域指定を上書きして広げず、追加で絞り込む。古い地域を据え置いて現在時代と一致しない場合や、実行時に未知の制度IDが来た場合は発生させない。

## 最初の適用対象

- `edo-gonin-gumi`: 江戸期農村の1643〜1799年を採用。`collective_punishment` は五人組の連帯納税として整理し、中国や中世日本、都市・職人へ適用しない。隣家の年貢・労役の全額や一律の倍額を負担するという旧本文も修正。[群馬県立文書館](https://www.pref.gunma.jp/site/monjyokan/130131.html)、[越谷市史](https://adeac.jp/koshigaya-city-digital-archives/texthtml/d000010/mp000010-100010/ht001990)。1643年は参照法令が確認できるシナリオ下限で、制度の成立年ではない。1799年は近世区分の終端で廃止年ではない。町の五人組や江戸末期、地域・組ごとの運用、中国の什伍制・保甲制は未対応。

- `english-hunting-privilege`: 中世ブリテン1100〜1499年の農村シナリオ。日本の「年貢・無礼討ち」を英国にも適用していた選択肢を修正し、補償や刑罰の一律の断定を削除。[Historic Englandの森林法・王の狩猟権の調査](https://historicengland.org.uk/research/results/reports/5427/TheForestofDeanMappingProjectGloucestershire_AReportfortheNationalMappingProgramme)。森林法域や農村内の位置を持たないため、その精度での再現は未対応。狩猟隊による被害はゲームの場面設定であり、すべての狩猟で同じことが起きたという意味ではない。
- `roman-slavery`: ローマ市1〜400年の奴隷売買のシナリオ。`serf_master_whim` は互換IDを維持しつつ、自由農民・農奴・奴隷をまとめた旧イベントを、奴隷身分のみの所有者変更へ絞った。[地域博物館のローマの奴隷制解説](https://www.northeastmuseums.org.uk/segedunum/learning/life-as-a-slave)。採用範囲は制度の全存続期間ではない。逃亡後の解放身分への変更や所有者・売却先の状態は未対応。近世カリブや中世の農奴制は、これと別の制度として整備する。

- `english-ordeal`: ロンドン1100〜1214年のシナリオ。熱湯の神判をインド・全中世欧州に一律適用していたイベントを絞り、1215年以降はこの形式を出さない。[米国議会図書館の法史解説](https://blogs.loc.gov/law/2022/02/swimming-a-witch-evidence-in-17th-century-english-witchcraft-trials/) が説明するのは1215年の聖職者関与の禁止であり、全地域で即日すべての神判が消滅したという意味ではない。1100年はゲームが採用する下限で制度の創設年ではない。ロンドンへの限定も保守的なゲーム範囲。
- `manorial-marriage-dues`: 中世ブリテン1000〜1499年のシナリオ。イベント側の農村・農民条件も維持する。[英国国立公文書館の荘園文書解説](https://www.nationalarchives.gov.uk/archives-sector/finding-records-in-discovery-and-other-databases/manorial-documents-register/a-guide-to-manorial-documents/)。全農民が隷属身分とは限らず、荘園ごとの条件・個人の法的身分は未対応。範囲は実際の一律の制度存続期間ではない。

定義は制度が存在する可能性をこのシナリオに認めるもので、地域内の全住民が対象だったことを示すものではない。狩猟権・奴隷制は今回の限定範囲以外への対応、農奴制・連帯納税・医療アクセスなどは個別の資料と個人の状態を揃えた条件整備が残る。現代の国境を歴史上の法域と同一視しない。

## 検証

イベントを誤って全地域共通へ変更しても制度条件が残ること、採用年の前後、場所の不一致、未知IDを検査する。出典・期間・地域IDの整合性も検査する。全件／時代別エンジンで制度定義と条件は共通。
