<script lang="ts">
	import { game } from '#lib/game.svelte';
	import { expectedLifespan, formatYear, formatYen } from '#lib/engine/util';
	import type { FocusOption } from '#lib/types';
	import Scene from './Scene.svelte';

	const focuses: FocusOption[] = [
		{ id: 'survival', label: '生き延びる', sub: '体を守る' },
		{ id: 'labor', label: '働く', sub: '蓄えを増やす' },
		{ id: 'family', label: '家族と過ごす', sub: '絆を深める' },
		{ id: 'learning', label: '学ぶ', sub: '知識を増やす' },
		{ id: 'faith', label: '祈る', sub: '心の支え' }
	];
	const speeds = [1, 2, 4, 8, 16];

	const c = $derived(game.char!);
	const stats = $derived([
		{ k: '健康', v: c.health },
		{ k: '幸福', v: c.happiness },
		{ k: '知識', v: c.knowledge },
		{ k: '人間関係', v: c.relations }
	]);
	const living = $derived(c.family.filter((f) => f.alive));
	const gone = $derived(c.family.filter((f) => !f.alive));
	const e0 = $derived(Math.round(expectedLifespan(c.region, c.socialClass.mortalityMultiplier)));
	const jobLabel = $derived(
		c.age < 6
			? `幼少（${c.socialClass.name}の子）`
			: c.age < 13 && c.era.id === 'modern'
				? '就学・手伝い'
				: c.occupation
	);

	let chronicleEl = $state<HTMLUListElement | null>(null);
	let dialogEl = $state<HTMLDivElement | null>(null);

	$effect(() => {
		c.chronicle.length;
		if (chronicleEl) {
			chronicleEl.scrollTo({ top: chronicleEl.scrollHeight, behavior: 'smooth' });
		}
	});

	$effect(() => {
		if (game.decision && dialogEl) {
			dialogEl.querySelector<HTMLButtonElement>('.choices button')?.focus();
		}
	});
</script>

<div class="life-shell" inert={!!game.decision}>
	<header class="topbar">
		<div class="wrap tbar">
			<div class="brand">5000年分の<em>1</em></div>
			<div class="agebox">
				<div class="age mono">{c.age}<small>歳</small></div>
				<div class="yr">{formatYear(c.currentYear)} · {c.region.name}</div>
			</div>
			<button class="quit-btn" onclick={() => game.quit()}>中断</button>
		</div>
	</header>

	<main class="wrap life">
		<div class="summary-row">
			<section class="panel idcard" aria-label="人物">
				<div class="top mono">
					<span>{c.era.shortName} · {formatYear(c.birthYear)}生</span>
					<span>{c.sex === 'M' ? '男' : '女'}</span>
				</div>
				<div class="in">
					<div class="nm">{c.name}</div>
					<dl class="id-meta">
						<div><dt>居所</dt><dd>{c.place}</dd></div>
						<div><dt>身分</dt><dd>{c.socialClass.name}</dd></div>
						<div><dt>仕事</dt><dd>{jobLabel}</dd></div>
						<div><dt>読み書き</dt><dd>{c.literate ? 'できる' : 'できない'}</dd></div>
					</dl>
				</div>
			</section>

			<section class="panel status-card" aria-label="状態">
				<h3><span>状態</span><span class="lbl">0–100</span></h3>
				<div class="stat-grid">
					{#each stats as s (s.k)}
						<div class="stat">
							<span class="sk">{s.k}</span>
							<div class="bar"><i style="width:{s.v}%"></i></div>
							<span class="mono sv">{Math.round(s.v)}</span>
						</div>
					{/each}
				</div>
				<div class="income-row">
					<span class="lbl">収入</span>
					<span class="income-val">
						<b class="mono">{c.annualIncomeUnits.toLocaleString('ja-JP')}</b>
						<span class="unit">{c.region.currencyUnit}/年</span>
						<small>（現代換算 約{formatYen(c.modernFeelJpy)}）</small>
					</span>
				</div>
			</section>
		</div>

		<section class="panel feed-panel" aria-label="人生の記録">
			<h3>
				<span>人生の記録</span>
				<span class="lbl">新しい順 · {c.feed.length}件</span>
			</h3>
			<ul class="feed">
				{#each c.feed as f (f.id)}
					<li class={f.type}>
						<span class="a mono">
							<b>{f.age}歳</b>
							<small>{formatYear(f.year)}</small>
						</span>
						<span class="x">
							<span class="txt">{f.text}</span>
							{#if f.fact}<span class="f">資料 · {f.fact}</span>{/if}
						</span>
					</li>
				{/each}
			</ul>
		</section>

		<section class="panel focus-panel" aria-label="今年の重点">
			<div class="focus-bar">
				<div class="focus-head">
					<b>今年の重点</b>
					<span class="lbl">いつでも変更可</span>
				</div>
				<div class="chips">
					{#each focuses as f (f.id)}
						<button
							class="chip"
							aria-pressed={c.focus === f.id}
							onclick={() => (c.focus = f.id)}
						>
							<span>{f.label}</span>
							<small>{f.sub}</small>
						</button>
					{/each}
				</div>
			</div>
		</section>

		<div class="sub-grid">
			<section class="panel" aria-label="世界の出来事">
				<h3><span>世界の出来事</span><span class="lbl">古い順 · 下へ追加</span></h3>
				<ul class="chronicle" bind:this={chronicleEl}>
					{#each c.chronicle as ev (ev.id)}
						<li>
							<span class="cy mono">{formatYear(ev.year)}<small>{ev.age}歳のとき</small></span>
							<span class="cx">
								<b><em class="rtag">{ev.regionTag}</em>{ev.title}</b>
								<small>{ev.description}</small>
							</span>
						</li>
					{/each}
				</ul>
			</section>

			<div class="sub-side">
				<section class="panel" aria-label="家族">
					<h3><span>家族</span><span class="lbl">生存 {living.length}人{gone.length > 0 ? ` · 故人 ${gone.length}人` : ''}</span></h3>
					<div class="fam">
						{#each living as f (f.name)}
							<div class="row"><span>{f.relation}</span><span>{f.name}</span></div>
						{/each}
						{#each gone as f (f.name)}
							<div class="row gone"><span>{f.relation}</span><span>{f.name}（{f.deathPlayerAge}歳のとき没）</span></div>
						{/each}
					</div>
				</section>

				<section class="panel region-card" aria-label="この時代・この地域">
					<div class="scene"><Scene region={c.region} /></div>
					<div class="region-body">
						<h3><span>この時代・この地域</span></h3>
						<dl class="stats">
							<dt>乳児死亡率</dt><dd>{c.region.infantMortality}‰</dd>
							<dt>平均寿命（出生時）</dt><dd>約{e0}歳</dd>
							<dt>15歳時点の平均寿命</dt><dd>約{c.region.lifeExpectancyAt15}歳</dd>
							<dt>5歳未満死亡率</dt><dd>{Math.round(c.region.under5Mortality / 10)}%</dd>
							<dt>識字率</dt><dd>{c.region.literacyRate}%</dd>
							<dt>都市人口率</dt><dd>{c.region.urbanizationRate}%</dd>
							<dt>主食</dt><dd>{c.region.dietStaple}</dd>
						</dl>
						<p class="src">{c.region.medicalCommonSense}</p>
					</div>
				</section>
			</div>
		</div>
	</main>

	<footer class="bottombar" aria-label="時間の操作">
		<div class="wrap bbar">
			<button
				class="ctrl-pause"
				aria-pressed={game.paused}
				onclick={() => game.togglePause()}
			>
				{game.paused ? '▶ 再開' : '❚❚ 一時停止'}
			</button>

			<select
				class="spd-select mono"
				aria-label="進行速度"
				value={game.speed}
				onchange={(e) => game.setSpeed(Number(e.currentTarget.value))}
			>
				{#each speeds as s (s)}
					<option value={s}>速度 {s}×</option>
				{/each}
			</select>

			<button class="ctrl-ff" onclick={() => game.fastForward()}>
				次の決断まで »
			</button>
		</div>
	</footer>
</div>

{#if game.decision}
	{@const d = game.decision}
	<div class="scrim">
		<div class="dec" bind:this={dialogEl} role="dialog" aria-modal="true" aria-label={d.title}>
			<div class="hd">{d.category === 'historical_wave' ? `歴史の大波 · ${d.historicalYearLabel ?? ''}` : '決断'} · {c.age}歳</div>
			<div class="bd">
				<h2>{d.title}</h2>
				<p>{d.description}</p>
				<div class="fact">{d.factBox}</div>
				<div class="choices">
					{#each d.choices as ch (ch.id)}
						<button onclick={() => game.choose(ch)}><b>{ch.label}</b><small>{ch.subLabel}</small></button>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.life-shell {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}
	.topbar {
		position: sticky;
		top: 0;
		z-index: 20;
		background: var(--paper);
		border-bottom: 1px solid var(--rule);
	}
	.tbar {
		max-width: 980px;
		display: flex;
		align-items: center;
		gap: 14px;
		padding-block: 8px;
	}
	.brand {
		font-family: var(--f-display);
		font-weight: 700;
		font-size: 16px;
		white-space: nowrap;
	}
	.brand em {
		font-style: normal;
		color: var(--accent);
	}
	.agebox {
		display: flex;
		align-items: baseline;
		gap: 10px;
		flex: 1;
		min-width: 0;
		flex-wrap: wrap;
	}
	.age {
		font-family: var(--f-display);
		font-size: 32px;
		font-weight: 700;
		line-height: 1;
	}
	.age small {
		font-size: 15px;
		font-weight: 500;
		margin-left: 1px;
	}
	.yr {
		font-size: 12.5px;
		color: var(--ink2);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.quit-btn {
		border: 1px solid var(--rule);
		background: transparent;
		color: var(--ink2);
		border-radius: 4px;
		padding: 5px 11px;
		font-size: 12.5px;
		white-space: nowrap;
	}
	.quit-btn:hover {
		border-color: var(--ink3);
		color: var(--ink);
	}

	.life {
		flex: 1;
		width: 100%;
		max-width: 980px;
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding-block: 14px 28px;
	}

	/* 1. 名前 → 状態 コンパクト上部ストリップ */
	.summary-row {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
		gap: 12px;
		align-items: stretch;
	}
	@media (max-width: 720px) {
		.summary-row {
			grid-template-columns: 1fr;
			gap: 10px;
		}
	}

	.idcard {
		padding: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.top {
		background: var(--accent);
		color: var(--accent-ink);
		padding: 5px 12px;
		display: flex;
		justify-content: space-between;
		font-size: 11px;
	}
	.in {
		padding: 10px 12px;
	}
	.nm {
		font-family: var(--f-display);
		font-size: 20px;
		font-weight: 700;
		line-height: 1.2;
	}
	.id-meta {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 4px 12px;
		margin: 8px 0 0;
		font-size: 12.5px;
	}
	.id-meta > div {
		display: flex;
		align-items: baseline;
		gap: 6px;
		min-width: 0;
	}
	.id-meta dt {
		color: var(--ink3);
		font-size: 11.5px;
		flex-shrink: 0;
	}
	.id-meta dd {
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.status-card {
		padding: 10px 14px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 8px;
	}
	.status-card > h3 {
		margin: 0;
		font-size: 13.5px;
	}
	.stat-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 5px 16px;
	}
	@media (max-width: 440px) {
		.stat-grid {
			grid-template-columns: 1fr;
			gap: 3px;
		}
	}
	.stat {
		display: grid;
		grid-template-columns: 4.3em 1fr 2em;
		gap: 8px;
		align-items: center;
		font-size: 12.5px;
	}
	.stat .sk {
		color: var(--ink2);
		white-space: nowrap;
	}
	.stat .sv {
		text-align: right;
		font-size: 12px;
	}
	.income-row {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 8px;
		flex-wrap: wrap;
		border-top: 1px dashed var(--rule);
		padding-top: 7px;
		font-size: 12.5px;
	}
	.income-val {
		display: inline-flex;
		align-items: baseline;
		gap: 4px;
		flex-wrap: wrap;
	}
	.income-val b {
		font-size: 14px;
		font-weight: 700;
	}
	.income-val .unit {
		color: var(--ink2);
		font-size: 12px;
	}
	.income-val small {
		color: var(--ink3);
		font-size: 12px;
	}

	/* 2. 人生の記録（メイン・高視認性） */
	.feed-panel {
		padding: 16px 18px;
	}
	.feed {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: min(56vh, 520px);
		overflow-y: auto;
	}
	.feed li {
		display: grid;
		grid-template-columns: 4.8em minmax(0, 1fr);
		gap: 12px;
		padding: 11px 10px;
		border-bottom: 1px solid var(--rule2);
		border-left: 3px solid transparent;
		font-size: 15px;
		line-height: 1.6;
	}
	.feed li:first-child {
		background: color-mix(in srgb, var(--card2) 70%, transparent);
		border-radius: 3px;
	}
	.feed .a {
		display: flex;
		flex-direction: column;
		line-height: 1.3;
		padding-top: 2px;
	}
	.feed .a b {
		font-size: 13.5px;
		font-weight: 700;
		color: var(--ink);
	}
	.feed .a small {
		font-size: 11px;
		color: var(--ink3);
	}
	.feed .x {
		display: flex;
		flex-direction: column;
		gap: 5px;
		min-width: 0;
	}
	.feed .f {
		display: block;
		font-family: var(--f-mono);
		font-size: 12px;
		line-height: 1.5;
		color: var(--ink2);
		background: var(--card2);
		padding: 4px 9px;
		border-radius: 3px;
	}
	.feed li.historical {
		border-left-color: var(--accent);
	}
	.feed li.historical .txt {
		color: var(--accent);
		font-weight: 700;
	}
	.feed li.milestone {
		border-left-color: var(--accent);
	}
	.feed li.milestone .txt {
		font-weight: 600;
	}
	.feed li.decision {
		border-left-color: var(--ink3);
	}
	.feed li.decision .txt {
		color: var(--ink);
	}
	.feed li.danger,
	.feed li.loss {
		border-left-color: var(--bad);
	}
	.feed li.danger .txt,
	.feed li.loss .txt {
		color: var(--bad);
		font-weight: 600;
	}
	.feed li.warm {
		border-left-color: var(--stamp);
	}
	.feed li.warm .txt {
		color: var(--stamp);
		font-weight: 600;
	}
	.feed li.death .txt {
		font-family: var(--f-display);
		font-size: 17px;
		font-weight: 700;
	}

	/* 3. 今年の重点（コンパクトバー） */
	.focus-panel {
		padding: 12px 16px;
	}
	.focus-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px 16px;
		flex-wrap: wrap;
	}
	.focus-head {
		display: flex;
		align-items: baseline;
		gap: 8px;
		font-size: 14px;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.chip {
		border: 1px solid var(--rule);
		background: var(--card);
		border-radius: 999px;
		padding: 5px 12px;
		font-size: 13px;
		display: inline-flex;
		align-items: baseline;
		gap: 5px;
		line-height: 1.3;
	}
	.chip small {
		font-size: 11px;
		color: var(--ink3);
	}
	@media (max-width: 520px) {
		.chip small {
			display: none;
		}
	}
	.chip[aria-pressed='true'] {
		background: var(--stamp);
		border-color: var(--stamp);
		color: var(--paper);
		font-weight: 600;
	}
	.chip[aria-pressed='true'] small {
		color: inherit;
		opacity: 0.85;
	}

	/* 4. 下部サブ情報（世界の出来事・家族・時代地域統計） */
	.sub-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
		gap: 14px;
		align-items: start;
	}
	@media (max-width: 760px) {
		.sub-grid {
			grid-template-columns: 1fr;
		}
	}
	.sub-side {
		display: flex;
		flex-direction: column;
		gap: 14px;
		min-width: 0;
	}
	.fam {
		display: flex;
		flex-direction: column;
		gap: 5px;
		font-size: 13px;
	}
	.fam .row {
		display: flex;
		justify-content: space-between;
		gap: 10px;
	}
	.fam .row span:first-child {
		color: var(--ink3);
	}
	.fam .gone {
		text-decoration: line-through;
		color: var(--ink3);
	}

	.region-card {
		padding: 0;
		overflow: hidden;
	}
	.scene {
		border-bottom: 1px solid var(--rule);
	}
	.region-body {
		padding: 12px 14px;
	}
	.stats {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 2px 10px;
		margin: 8px 0 0;
		font-size: 12.5px;
	}
	.stats dt {
		color: var(--ink3);
		font-size: 12px;
	}
	.stats dd {
		margin: 0;
		text-align: right;
		font-family: var(--f-mono);
		font-size: 12.5px;
	}
	.src {
		margin: 10px 0 0;
		font-size: 12px;
		color: var(--ink3);
	}

	.chronicle {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 320px;
		overflow-y: auto;
		scroll-behavior: smooth;
	}
	.chronicle li {
		display: grid;
		grid-template-columns: 5.8em minmax(0, 1fr);
		gap: 10px;
		padding: 8px 0;
		border-bottom: 1px solid var(--rule2);
		font-size: 13px;
		animation: chIn 0.35s ease;
	}
	@keyframes chIn {
		from {
			background: var(--stamp-soft);
		}
		to {
			background: transparent;
		}
	}
	.chronicle .cy {
		font-size: 11.5px;
		color: var(--ink3);
		line-height: 1.35;
	}
	.chronicle .cy small {
		display: block;
		font-size: 11px;
		color: var(--ink3);
	}
	.chronicle .cx {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}
	.chronicle .cx b {
		font-weight: 600;
		color: var(--ink);
		line-height: 1.4;
	}
	.chronicle .cx small {
		font-size: 12px;
		color: var(--ink2);
		line-height: 1.45;
	}
	.rtag {
		font-style: normal;
		font-size: 11px;
		font-weight: 600;
		color: var(--stamp);
		background: var(--stamp-soft);
		padding: 1px 6px;
		border-radius: 3px;
		margin-right: 6px;
	}

	/* 5. 下部スティッキー操作バー */
	.bottombar {
		position: sticky;
		bottom: 0;
		z-index: 20;
		background: var(--paper);
		background: color-mix(in srgb, var(--paper) 94%, transparent);
		backdrop-filter: blur(8px);
		border-top: 1px solid var(--rule);
		box-shadow: 0 -6px 20px -12px rgba(0, 0, 0, 0.25);
	}
	.bbar {
		max-width: 980px;
		display: flex;
		align-items: center;
		gap: 8px;
		padding-top: 10px;
		padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));
	}
	.ctrl-pause {
		border: 1px solid var(--rule);
		background: var(--card);
		border-radius: 4px;
		padding: 8px 14px;
		min-height: 40px;
		font-size: 13.5px;
		font-weight: 600;
		white-space: nowrap;
	}
	.ctrl-pause[aria-pressed='true'] {
		background: var(--ink);
		color: var(--paper);
		border-color: var(--ink);
	}
	.spd-select {
		font: inherit;
		font-family: var(--f-mono);
		color: var(--ink);
		background-color: var(--card);
		border: 1px solid var(--rule);
		border-radius: 4px;
		padding: 8px 10px;
		min-height: 40px;
		font-size: 13px;
		cursor: pointer;
	}
	.spd-select:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}
	.ctrl-ff {
		margin-left: auto;
		border: 0;
		background: var(--accent);
		color: var(--accent-ink);
		border-radius: 4px;
		padding: 8px 18px;
		min-height: 40px;
		font-size: 14px;
		font-weight: 600;
		white-space: nowrap;
		box-shadow: var(--shadow);
	}
	.ctrl-ff:hover {
		filter: brightness(1.07);
	}
</style>
