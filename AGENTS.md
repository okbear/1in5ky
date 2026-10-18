# AGENTS.md — AIコーディングエージェント向け開発ガイドライン

このリポジトリは **1in5ky**（『5000年分の1』/ 1 in 5,000 Years）です。
『80億分の1』（`1in8b.life`）にインスパイアされ、紀元前3000年〜現代（2026年）までの約5000年間に生まれた推計約650億人のひとりとしてランダムに生まれ、その時代・地域の実際の歴史統計・社会構造の中で一度きりの人生をシミュレーションするWebゲームです。

---

## 1. 開発環境・技術スタック（厳守事項）

- **言語 / フレームワーク**: TypeScript（厳格モード）+ SvelteKit 3 (`@sveltejs/kit`) + Svelte 5（Runesモード: `$state`, `$derived`, `$effect`, `$props`）。Svelte 4 のレガシー記法（`export let` や `writable` ストア）は使用禁止。
- **スタイリング**: バニラCSS（`src/app.css` のCSS変数を参照）。指示がない限り Tailwind CSS などの外部ライブラリを勝手に追加しないこと。
- **ランタイム / パッケージマネージャ**: Bun（v1.4.x）。`npm` や `yarn`, `pnpm` ではなく必ず `bun` を使用すること。
- **デプロイ先**: Vercel（`@sveltejs/adapter-vercel`、Node 24 ランタイム、静的トークン不要のGitHub App連携）。
- **バージョン固定**: `.tool-versions`（`nodejs 24.21.0`, `bun 1.4.3`）および `package.json`（`devDependencies` はキャレット `^` なしの完全固定）。

---

## 2. 必須コマンド

```bash
# 依存関係のインストール（ロックファイルと完全一致で復元）
bun install --frozen-lockfile

# 型チェック（コミット前に必ず実行し 0 errors であること）
bun run check

# 本番ビルド検証
bun run build

# 開発サーバー起動（デフォルトポート 5199）
bun run dev --port 5199 --host 127.0.0.1

# 不変条件・シミュレーション検証（3,000人生モンテカルロテスト）
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
console.log("3,000 lives simulation passed successfully.");
'
```

---

## 3. コーディング規約・品質ルール

### 3.1 型安全とドメインモデル
- **地域の型縛り（重要）**: 地域IDを単なる `string` で扱わないこと。必ず `src/lib/types.ts` で定義されている厳格なユニオン型 `RegionId` を使うこと。イベントの `regionIds` も `RegionId[]` で型定義されているため、存在しない地域名を書いた場合は型チェックで弾かれる。
- **インポートエイリアス**: パッケージ設定により `#lib/...`（または相対パス `../...`）を使用すること。`$lib` は SvelteKit 3 の設定上モジュール解決エラーになるため使用禁止。
- **無意味な1行ラッパー関数の禁止**: 1行の式を返すだけの trivial な関数（`const double = (x) => x * 2` 等）は作らずインライン化すること（ドメイン計算式に名前をつける場合や3箇所以上から呼ばれる場合を除く）。
- **`ReturnType<typeof fn>` による公開契約の禁止**: インターフェースや型は必ず名前をつけて明示的に定義・エクスポートすること。
- **タイマーの冗長ガード禁止**: `clearTimeout` / `clearInterval` に `if (this.timer)` のような真偽値チェックを挟まないこと（仕様上 `null` や未定義を渡しても安全なため）。

---

## 4. アーキテクチャとデータ分割構造

デグレや巨大ファイルの保守破綻を防ぐため、データは時代・テーマごとに細かく分割されています：

```
src/lib/
├── types.ts                    # 全型定義（EraId, RegionId, DecisionEvent, CharacterState 等）
├── game.svelte.ts              # グローバル進行ステート管理（Svelte 5 runes Game クラス）
├── engine/
│   ├── util.ts                 # 生命表ハザード計算（Gompertz較正）、乱数ユーティリティ
│   └── engine.ts               # 誕生抽選、stepYear進行ループ、決断解決
└── data/
    ├── eras.ts                 # 6時代区分の定義・累計出生数推計（約90行）
    ├── timeline.ts             # 世界史年表、世界の出来事クロニクル、初期墓標（約240行）
    ├── events-lifecycle.ts     # 進路・結婚・出産・老後の決断イベント（約370行）
    ├── events.ts               # 全イベントの集約アグリゲーター（ALL_EVENTS）
    ├── events/                 # 【時代・テーマ別イベント】
    │   ├── ancient_classical.ts       # 古代・古典期の戦争・徴用・神判
    │   ├── medieval_early_modern.ts   # 中世・近世の戦乱・ペスト・小氷期飢饉・魔女裁判
    │   ├── industrial_modern.ts       # 近代・現代の総力戦・空襲・公害・冷戦紛争
    │   └── common_unfair.ts           # 複数時代共通の破傷風・歯の化膿・悪税
    ├── regions.ts              # 全地域の集約アグリゲーター（REGIONS）
    └── regions/                # 【時代別地域プロファイル】
        ├── common.ts           # 身分定義（CLASSES）とbaseRegionビルダー
        ├── ancient.ts          # 古代（メソポタミア・エジプト・中国・インダス）
        ├── classical.ts        # 古典期（ローマ・漢・インド・ペルシア他）
        ├── medieval.ts         # 中世（欧州・イスラム・中国・日本・他）
        ├── early_modern.ts     # 近世（江戸・清・欧州・大西洋世界）
        ├── industrial.ts       # 近代（欧米・日本・中国・印・他）
        └── modern.ts           # 現代（日本・中国東ア・南アジア・中東アフリカ・欧米）
```

---

## 5. 歴史的リアリズムとゲーム設計上の不変条件（Invariants）

1. **「生まれる時代も場所も選べない」原則**:
   - タイトル画面に「時代の選択」「地域の選択」「人生の長さ」などの事前設定UIを追加しないこと。プレイヤーは「生まれる」ボタンを押すだけであり、累計出生数比率による完全ランダム抽選に従う。
2. **容赦のない人口統計リアリズム**:
   - 0歳（乳児）の死亡確率を手心で勝手に緩和・キャップしないこと。人類史の現実として、19世紀以前は生まれた赤ちゃんの25〜33%が満1歳を迎える前に死亡する。この過酷な事実こそが本作の根幹である。
3. **ライフイベントの決断モーダル必須化**:
   - 進路選択・結婚・出産は**絶対に裏で自動発生させないこと**。必ず `events-lifecycle.ts` の決断モーダル（`isLifecycle: true`）を経由させ、時代に即したジレンマ（結婚税、家同士の縁談、命がけの難産リスクなど）をプレイヤーに突きつけること。
4. **文化圏・言語・通貨の整合性**:
   - 日本の地域（`med_japan`, `em_edo`, `ind_japan`, `mod_japan`）に中国名やインド名、洋風通貨（ペンスなど）を混ぜないこと。
   - 中国の地域（`med_china`, `ind_china`, `mod_china_ea`）に日本名（太郎丸、お菊など）を混ぜないこと。
   - 地域特有の風習・病気は厳格に `RegionId` で縛ること：
     - **領主の狩猟隊による田畑蹂躙（`rural_lord_hunt`）**: 封建社会・貴族狩猟の歴史があるヨーロッパ・日本・中国に限定。
     - **麦角中毒（`spoiled_grain_ergot`）**: ライ麦・小麦を主食とするヨーロッパ・大西洋世界に限定（米食・雑穀地域には出さない）。

---

## 6. AI開発インフラ & MCP連携

- プロジェクト直下の `.mcp.json` に **Chrome DevTools MCP (`chrome-devtools-mcp`)** が設定されています。
- プロジェクトローカルの `devDependencies`（`1.11.0`）としてピン留めされているため、どのエージェント環境でも `bun run chrome-devtools-mcp` で追加インストール不要で動作します。
- エージェントはローカルブラウザ（`127.0.0.1:5199`）のDOM検証、コンソールエラー監視、画面スクリーンショット取得を自律的に行えます。

---

## 7. コミット前のチェックリスト

### 🚨 最重要ルール：リモートへの push は毎回必ずユーザーの明示的な許可を取ること
- **過去に一度 push を許可されていたとしても、新しい変更をリモート（GitHub）へ `git push` する際は、例外なく毎回必ずユーザーに事前の確認と許可を取ること。**
- 勝手に push したり、「以前許可されたから」と推測して push することは厳禁とする。必ず変更内容とコミット内容を報告し、「push してよいか」をユーザーに尋ねて許可を得てから実行すること。

---

## 8. コミット・検証前のチェックリスト

変更を行ったAIエージェントは、作業完了時に以下を必ず確認してください：
- [ ] `bun run check` でエラー・警告が 0 件であること。
- [ ] 3,000人生モンテカルロテストを実行し、実行時例外や不変条件違反が 0 件であること。
- [ ] モバイル画面幅（390px）で表示崩れや文字の見切れがないこと。
- [ ] **リモート（`git push`）へ反映する前に、必ずユーザーへ明示的に確認・許可を取ったか？**
