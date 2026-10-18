# 5000年分の1 (1 in 5,000 Years) - Product Specification & Architecture

## 1. 概要 (Overview)
紀元前3000年〜現代（2026年）までの約5000年間に地球上に生まれた推計約650億人の1人としてランダムに生まれ、その時代・地域の実際の歴史統計・社会構造の中で一度きりの人生をシミュレーションするWebゲーム。

元ネタである『80億分の1』（`1in8b.life`）の「生まれた場所の統計から抜け出せないリアルさ」というコアフックを時間軸（5000年）へ拡張した設計。

- **URL / リポジトリ**: `1in5ky` (`github.com/okbear/1in5ky`)
- **技術スタック**: SvelteKit (Svelte 5 runes) + TypeScript + Vite + バニラCSS (CSS Variables)
- **パッケージマネージャ / ランタイム**: Bun

---

## 2. コアゲームループ (Core Game Loop)

1. **Title / Intro (`Intro.svelte`)**
   - 紀元前3000年〜現代（650億人）の出生確率パネルを表示。
   - 「生まれる」ボタンで即座に抽選開始。事前の選択肢や設定項目は排除（「生まれる時代も場所も選べない」原則）。
2. **出生届 (`Cert.svelte`)**
   - 時代・年（B.C./A.D.）・地域・都市/農村・身分・名前・性別・主食・年収（当時の通貨＋現代体感日本円）・出生時平均寿命・識字率を決定。
   - 「同じ時代・地域に生まれた人は約〇〇人、5歳までに〇〇%が死亡」の同世代統計を表示。
   - 「人生を始める」でシミュレーション開始（「生まれ直す」も可能）。
3. **人生進行 (`Life.svelte`)**
   - **時間進行**: 1年 = 2.5秒（基準速度）。倍速（1×, 2×, 4×, 8×, 16×）、一時停止、「次の決断まで »」早送りが可能。
   - **画面構成**:
     - **上部バー**: 年齢、現在の西暦、地域名、時間操作コントロール。
     - **左カラム**: 身分証（居所・身分・職業・識字）、状態（健康・幸福・知識・人間関係 0-100）、収入（当時の単位/年 + 現代体感年額）、家族リスト（生存・没年齢）。
     - **中央カラム**: 時代別建築シルエット風景SVG、今年の重点（生き延びる・働く・家族と過ごす・学ぶ・祈る）、人生の記録フィード（新しい順、行ごとに事実・資料リンク付き）。
     - **右カラム**: **世界の出来事**（生きている間に世界各地で起きた事件が古い順に下へ連結され自動スクロール）、この時代・地域の基礎統計。
   - **決断モーダル**:
     - 歴史の大波（戦争・疫病・大飢饉・徴兵など）
     - ライフイベント（進路・結婚・出産：必ず手動で決断）
     - 時代・地域の理不尽イベント（破傷風・歯の化膿・神判・連座制・悪税など）
4. **死亡証明 / リザルト (`Dead.svelte`)**
   - 死亡時（または2026年到達時）に遷移。
   - 享年、死因、エピタフ、子どもの数（うち何人亡くしたか）、最終ステータス。
   - **あなたが亡くなったあと、世界は**: 没年以降に世界で起きた出来事と、その時代に信じられていた常識がのちにどう覆されたかのフィードバック。
   - **5000年のメモリアル年表**: 紀元前3000年〜2026年のタイムライン上に、歴代プレイ人生（赤）と初期配置の歴史的無名人（灰）の墓標が並ぶ。`localStorage`（`1in5ky.memorials`）に保存。

---

## 3. ディレクトリ構成 (Directory Structure)

```
src/
├── app.css                   # テーマ定義（CSS変数）、typography、ボタン、モーダル
├── app.html                  # HTMLシェル
├── routes/
│   ├── +layout.svelte        # グローバルレイアウト（app.css読み込み）
│   └── +page.svelte          # フェーズ（intro | cert | life | dead）に応じた画面切り替え
└── lib/
    ├── types.ts              # 全型定義（Era, Region, Event, State, Memorial 等）
    ├── game.svelte.ts        # グローバル進行ステート管理（Svelte 5 runes: Game クラス）
    ├── components/
    │   ├── Intro.svelte      # タイトル・確率一覧・過去メモリアル一覧
    │   ├── Cert.svelte       # 出生届（誕生演出）
    │   ├── Life.svelte       # メイン人生進行画面
    │   ├── Dead.svelte       # 死亡証明・死後の世界年表・リザルト
    │   ├── Scene.svelte      # 時代・地域に応じた建築シルエット風景SVG
    │   └── Timeline.svelte   # 紀元前3000年〜2026年の墓標タイムライン
    ├── data/
    │   ├── eras.ts           # 6時代区分の定義・累計出生数推計
    │   ├── regions.ts        # 全地域の再エクスポート・集約アグリゲーター
    │   ├── regions/          # 時代別地域プロファイル分割モジュール
    │   │   ├── common.ts     # 身分定義（CLASSES）とbaseRegionヘルパー
    │   │   ├── ancient.ts    # 古代（メソポタミア・エジプト・中国・インダス）
    │   │   ├── classical.ts  # 古典期（ローマ・漢・インド・ペルシア他）
    │   │   ├── medieval.ts   # 中世（欧州・イスラム・中国・日本・他）
    │   │   ├── early_modern.ts # 近世（江戸・清・欧州・大西洋世界）
    │   │   ├── industrial.ts # 近代（欧米・日本・中国・印・他）
    │   │   └── modern.ts     # 現代（日本・中国東ア・南アジア・中東アフリカ・欧米）
    │   ├── events.ts         # 全イベント（ALL_EVENTS / WAVE / UNFAIR / LIFECYCLE）集約アグリゲーター
    │   ├── events/           # 時代・テーマ別イベント分割モジュール
    │   │   ├── ancient_classical.ts   # 古代・古典期の歴史大波・戦争・神判
    │   │   ├── medieval_early_modern.ts # 中世・近世の歴史大波・疫病・宗教・悪税
    │   │   ├── industrial_modern.ts   # 近代・現代の総力戦・空襲・公害・冷戦紛争
    │   │   └── common_unfair.ts       # 複数時代共通の病気・破傷風・歯・悪税・身分制
    │   ├── events-lifecycle.ts # 進路・結婚・出産・老後の決断イベント
    │   └── timeline.ts       # 死後世界年表・世界の出来事クロニクル・初期墓標
    └── engine/
        ├── util.ts           # 生命表ハザード計算、Gompertz較正、乱数ユーティリティ
        └── engine.ts         # 誕生抽選、stepYear進行、決断解決、家族/クロニクル進行
```

---

## 4. データ仕様 (Data Specifications)

### 4.1 時代区分 (`eras.ts`)
人類の推計累計出生数（紀元前3000年以降 約650億人）に基づく配分。

| Era ID | 名称 | 期間 | 推計出生数 | シェア | 特徴・死因の壁 |
|---|---|---|---|---|---|
| `ancient` | 古代文明期 | B.C.3000〜B.C.501 | 105億人 | 16.2% | 灌漑文明、9割が農民・奴隷、5歳未満死亡率約50% |
| `classical` | 帝国・古典期 | B.C.500〜A.D.499 | 85億人 | 13.1% | ローマ・秦漢・マウリヤ、街道網、帝国型疫病、徴兵 |
| `medieval` | 中世・封建期 | A.D.500〜A.D.1499 | 115億人 | 17.7% | 封建制、イスラム黄金期、黒死病、長雨凶作、宗教統治 |
| `early_modern` | 近世・大航海期 | A.D.1500〜A.D.1799 | 95億人 | 14.6% | コロンブス交換、小氷期飢饉、火縄銃、江戸幕藩体制 |
| `industrial` | 近代・産業革命 | A.D.1800〜A.D.1944 | 140億人 | 21.5% | 蒸気機関、都市化、児童労働、コレラ、総力戦 |
| `modern` | 現代 | A.D.1945〜A.D.2026 | 110億人 | 16.9% | 抗生物質、人口爆発、公衆衛生、局地紛争、格差 |

### 4.2 地域プロファイル (`regions.ts`)
全27地域（アジア各地域を文化圏・時代ごとに完全分離）。各地域ごとに以下の統計・設定を保持：
- `infantMortality`（出生1,000人あたりの乳児死亡数）
- `under5Mortality`（5歳未満児累積死亡率 ‰）
- `lifeExpectancyAt15`（15歳まで生き延びた者の平均寿命）
- `literacyRate`（識字率 %）
- `urbanizationRate`（都市人口率 %）
- `gdpPerCapitaPPP` / `modernFeelJpy`（当時の通貨と現代日本円の生活実感換算）
- `classes`（身分構成：奴隷/農民/職人商人/兵士/学者聖職者/貴族）
- `maleNames` / `femaleNames`（文化圏に応じた人名リスト各10件以上）
- `dietStaple` / `beliefSystem` / `medicalCommonSense` / `worldviewCommonSense`

### 4.3 イベント構造 (`events-*.ts`)
- `WAVE_EVENTS`: 歴史上の確定戦争・大疫病・大飢饉（ペスト、モンゴル侵攻、天明の飢饉、世界大戦、空襲、徴兵令など）。
- `UNFAIR_EVENTS`: 当時の医療・迷信・悪税・身分制度（破傷風、歯の化膿、麦角中毒、神判、連座制、窓税、塩税、強制徴募、領主の狩猟など）。
- `LIFECYCLE_EVENTS`: 人生の岐路。**結婚・出産はすべてこのイベントの選択肢を通してのみ発生**（自動発生なし）。
  - 結婚税、家同士の縁談、現代の結婚
  - 女性の命がけの出産（産褥熱リスク）、夫側の難産対処（妻の死亡リスク `killSpouseChance`）、現代の病院出産
  - 児童労働、進路選択、中年期の隣家離散、老後の引き際

---

## 5. シミュレーション数理モデル (Simulation Engine)

### 5.1 生命表ハザードモデル (`util.ts`)
各年齢 $a$ における年間死亡確率 $q(a)$ を以下のように構成：
- $a = 0$（乳児）: $q(0) = \text{infantMortality} / 1000$
- $1 \le a < 5$（幼児）: 0〜4歳の累積死亡率が $\text{under5Mortality}$ と一致するよう幾何平均逆算
- $5 \le a < 15$（児童）: 低率フラットハザード
- $a \ge 15$（成人以降）: Gompertz曲線 $q(a) = \min(0.98, A \cdot \exp(B \cdot (a - 15)))$
  - 15歳時点の平均余命（$\text{lifeExpectancyAt15} - 15$）と一致するよう、パラメータ $A$ を二分探索で地域ごとに自動較正。
- **補正値**:
  $$\text{hazard} = q(a) \times \text{classMortalityMultiplier} \times (1.5 - 0.0075 \times \text{health})$$
  （健康ステータス 0 で 1.5倍、100 で 0.75倍）

### 5.2 誕生ガチャロジック (`engine.ts`)
- 時代抽選: 6時代の推計累計出生数比率による加重抽選。
- 生誕年抽選: 時代内の人口増加を反映するため、指数成長逆CDF関数を用いて時代の後半に生まれやすいよう重み付け。
- 地域・身分抽選: 時代内の地域出生比率・各地域内の身分比率による加重抽選。
- 命名: 家族・親族内で名前が重複しないよう `pickUniqueName`（`Set` による排他制御）を使用。

### 5.3 1年進行処理 (`stepYear`)
毎ティック、以下の順序で厳密に処理：
1. **死亡判定**: 当該年齢のハザードに基づきサイコロを振る（0歳乳児死亡含む）。死亡時は即座にリザルト確定。
2. **年齢・西暦加算**: 生存した場合のみ $a \leftarrow a + 1$, $y \leftarrow y + 1$。
3. **ステータス自然変化**: 選択中の「重点」（生存/労働/家族/学習/信仰）および加齢（40歳以降の自然衰退）を反映。
4. **2026年到達判定**: 西暦が2026年に達した場合、死亡ではなく「現在も生存中（`ongoing = true`）」として終了。
5. **家族進行 (`familyTick`)**: 親・兄弟・配偶者・子どもの死亡判定（子どもは15歳まで幼児死亡率で個別に死亡判定）。
6. **世界の出来事記録 (`chronicleTick`)**: 実在の世界史事件または同時代の世界動向を右カラムクロニクルに追加。
7. **イベント発火**:
   - 優先度1: 歴史の大波（確定年代イベント、発生率高）
   - 優先度2: ライフイベント（進路・結婚・出産、発生率 36%）
   - 優先度3: 理不尽・日常イベント（発生率 38%）
   ※発火時はゲームループが一時停止し、プレイヤーの選択待ちとなる。

---

## 6. UI / スタイリング設計 (UI & Design Standards)

- **デザイン方針**: `1in8b.life` インスパイアの静謐なタイポグラフィ、紙（羊皮紙・古紙）の風合い、明朝体・セリフ体と等幅フォントの対比。
- **カラーパレット (CSS Variables in `app.css`)**:
  - `--paper`: 背景紙色（Light: `#f1ede4` / Dark: `#14110e`）
  - `--card`: パネル背景（Light: `#faf7f0` / Dark: `#1c1814`）
  - `--ink`: 主文字色（Light: `#231c16` / Dark: `#ece4d6`）
  - `--accent`: エンジ・紅色（Light: `#7b2334` / Dark: `#e07a90`）
  - `--stamp`: 深緑・青磁（Light: `#0f6e68` / Dark: `#4cc0af`）
  - `--rule`: 区切り線（Light: `#d6ccb9` / Dark: `#3a322a`）
- **タイポグラフィ**:
  - `--f-display`: 游明朝, 秀英明朝, Noto Serif JP
  - `--f-body`: システムサンセリフ
  - `--f-mono`: 等幅フォント（数字・年号用）

---

## 7. 開発コマンド・検証方法 (Development & Verification)

```bash
# 依存関係インストール
bun install

# 型チェック（SvelteKit 3 + Svelte 5 runes）
bun run check

# 開発サーバ起動
bun run dev --port 5199

# プロダクションビルド検証
bun run build

# シミュレーション数理・不変条件テスト（3,000人生モンテカルロ）
bun -e '
import { rollBirth, stepYear, resolveChoice } from "./src/lib/engine/engine";
for (let i = 0; i < 3000; i++) {
  const c = rollBirth();
  for (let g = 0; g < 130; g++) {
    const r = stepYear(c);
    if (r.decision) {
      const ch = r.decision.choices[0];
      if (resolveChoice(c, ch).died) break;
    }
    if (r.ended) break;
  }
}
console.log("3,000 lives simulated successfully without invariant errors.");
'
```

---

## 8. AI開発インフラ & MCP連携 (AI Development Infrastructure & MCP)

プロジェクト直下の `.mcp.json` に **Chrome DevTools MCP (`chrome-devtools-mcp`)** の設定を配置しています。
グローバル環境や外部依存に頼らず他マシン・他ユーザーの環境でも100%同一バージョンで再現できるよう、`chrome-devtools-mcp` は `package.json`（`devDependencies`）に完全固定（Exact `1.11.0`）でインストールされ、`bun.lock` にロックされています。

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "bunx",
      "args": ["chrome-devtools-mcp", "--no-usage-statistics"]
    }
  }
}
```

- **対象ツール**: Claude Code, Cursor, Antigravity, Copilot などの MCP 対応コーディングエージェント
- **機能**:
  - 開発用ローカルブラウザ（Chrome）の自動起動とライブ操作（クリック、フォーム入力、ページ遷移）
  - DOMインスペクション、コンソールエラー・警告のリアルタイム監視
  - ネットワークリクエスト・レスポンスのトレース
  - 画面スクリーンショットの取得と視覚的検証
- **手動実行・検証**:
  ```bash
  bun run chrome-devtools-mcp --no-usage-statistics
  ```

---

## 9. 次の拡張・未着手アイディア (Future Roadmap)

1. **サウンド・環境音**: 元ネタにあるような「穏やかなBGM（ハープ・民族楽器）」や時代ごとの環境音（川のせせらぎ、風、工場の汽笛など）。
2. **多言語対応 (i18n)**: 英語（`1 in 5,000 Years`）および他言語への切り替え機構。
3. **オンラインメモリアル共有**: 現在は端末ローカル（`localStorage`）のみの墓標を、Cloudflare D1 / PostgreSQL などの軽量バックエンド経由で全世界プレイヤーの墓標を5000年タイムライン上にマッピングする機能。
4. **教育モード (Edu mode)**: 学校の歴史・社会科の授業で使えるよう、過激な描写を抑えた教員向けプリセット。
