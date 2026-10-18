# AGENTS.md — Guidelines for AI Coding Agents in 1in5ky

This repository is **1in5ky** (5000年分の1 / 1 in 5,000 Years), a historical human life simulation Web game inspired by `1in8b.life`.
It simulates human lives randomly sampled across 5,000 years (3000 B.C. to 2026 A.D.) using real demographic mortality models and historical constraints.

---

## 1. Environment & Stack (Strict)

- **Language / Framework**: TypeScript (strict) + SvelteKit 3 (`@sveltejs/kit`) + Svelte 5 (Runes mode: `$state`, `$derived`, `$effect`, `$props`).
- **Styling**: Vanilla CSS with design variables (`src/app.css`). Do NOT add Tailwind or heavy CSS libraries unless explicitly asked.
- **Package Manager / Runtime**: Bun (v1.4.x). Always use `bun` commands instead of `npm`, `pnpm`, or `yarn`.
- **Target Deployment**: Vercel (`@sveltejs/adapter-vercel`, Node 24 runtime, zero-static-token Git integration).
- **Tooling Versions**: Pinned exactly in `.tool-versions` (`nodejs 24.21.0`, `bun 1.4.3`) and `package.json` (`devDependencies` are strictly pinned without carets `^`).

---

## 2. Essential Commands

```bash
# Install dependencies (respecting exact pinned versions)
bun install --frozen-lockfile

# Type check (MUST pass with 0 errors before committing)
bun run check

# Build production bundle
bun run build

# Start local dev server (default port 5199)
bun run dev --port 5199 --host 127.0.0.1

# Invariant & Monte Carlo simulation verification (3,000 lives)
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

## 3. Strict Coding Conventions & Quality Rules

### 3.1 Type Safety & Domain Modeling
- **Region Types**: Never use bare `string` for region identifiers. Always use the strict union `RegionId` defined in `src/lib/types.ts`. All `regionIds` arrays in events MUST be typed as `RegionId[]`.
- **Imports Alias**: Project uses `#lib/...` (or relative `../...`), configured in `package.json` imports map. Do NOT use `$lib` (causes unresolved module errors in SvelteKit 3).
- **No Tiny Pointless Helpers**: Do not extract one-line trivial expressions into standalone functions unless they name a non-trivial domain formula or are called in 3+ places.
- **No `ReturnType<typeof fn>` for Contracts**: Define and export explicit named interfaces.
- **No Redundant Clear Guards**: Use `clearTimeout(this.timer)` directly without `if (this.timer)` guards.

### 3.2 Svelte 5 Runes
- Use `$state`, `$derived`, `$props()`, and `$effect`. Do NOT use Svelte 4 legacy store contracts (`$store` / `writable`) or `export let`.
- Components live in `src/lib/components/`.

---

## 4. Architecture & Data Organization

Data is strictly modularized to prevent regressions when adding or modifying historical eras:

```
src/lib/
├── types.ts                    # Canonical TypeScript interfaces (Era, RegionId, Event, State)
├── game.svelte.ts              # Global game state machine (Runes Game class)
├── engine/
│   ├── util.ts                 # Mortality Gompertz hazard model & RNG utilities
│   └── engine.ts               # Birth roll, stepYear loop, choice resolution
└── data/
    ├── eras.ts                 # 6 eras definition and cumulative birth estimates
    ├── timeline.ts             # World history timeline, chronicles, seed memorials
    ├── events-lifecycle.ts     # Career, marriage, childbirth decisions
    ├── events.ts               # Unified aggregator for all events (ALL_EVENTS)
    ├── events/                 # Era-specific event submodules
    │   ├── ancient_classical.ts
    │   ├── medieval_early_modern.ts
    │   ├── industrial_modern.ts
    │   └── common_unfair.ts
    ├── regions.ts              # Aggregator re-exporting all regions (REGIONS)
    └── regions/                # Era-specific region submodules
        ├── common.ts           # Social classes & baseRegion builder
        ├── ancient.ts
        ├── classical.ts
        ├── medieval.ts
        ├── early_modern.ts
        ├── industrial.ts
        └── modern.ts
```

---

## 5. Historical Accuracy & Design Invariants

1. **"Birth Cannot Be Chosen" Principle**:
   - There are NO era selection, country selection, or "life length" selectors on the title screen. The player clicks "生まれる" and receives their randomly sampled life according to historical cumulative birth weights.
2. **Brutal Demographic Realism**:
   - Infant mortality (0-year death) is NOT artificially nerfed or capped. In pre-modern eras, 25-33% of lives will naturally end at age 0. This is the core philosophical reality of human history.
3. **Decisions for Crucial Life Events**:
   - Marriage and childbirth NEVER occur silently in the background. They MUST go through player decision modals (`isLifecycle: true` in `events-lifecycle.ts`), presenting period-accurate dilemmas (e.g. merchet tax, arranged marriage, maternal mortality risk).
4. **Cultural & Linguistic Consistency**:
   - Japanese names (e.g. 太郎丸, お菊) MUST ONLY appear in Japanese regions (`med_japan`, `em_edo`, `ind_japan`, `mod_japan`).
   - Chinese names (王, 李, 偉) belong to Chinese regions (`anc_china`, `cls_han`, `med_china`, `ind_china`, `mod_china_ea`).
   - Do NOT mix up regional currencies, staples, or customs (e.g. no pence in Japan, no baked bread in millet/rice villages).
5. **Regional Constraints on Events**:
   - Feudal lord hunting (`rural_lord_hunt`) is strictly restricted to feudal Europe, Japan, and dynastic China (`RegionId`).
   - Ergot rye poisoning (`spoiled_grain_ergot`) is strictly restricted to rye/wheat regions (`cls_rome`, `med_europe`, `em_europe`, `em_atlantic`).

---

## 6. AI Agent Tooling & Verification

- **MCP Integration**: `.mcp.json` configures Chrome DevTools MCP (`chrome-devtools-mcp` pinned as a project-local devDependency). AI agents can inspect DOM, monitor console errors, and visually capture screens via local Chrome.
- **Before Committing**:
  1. Always run `bun run check` (MUST yield 0 errors, 0 warnings).
  2. Always run the 3,000 lives Monte Carlo simulation test to confirm no runtime exceptions, unhandled invariants, or broken event links.
  3. Verify responsive layout down to mobile viewport (390px width).
