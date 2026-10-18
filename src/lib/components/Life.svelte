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
	const jobLabel = $derived(c.age < 6 ? `幼少（${c.socialClass.name}の子）` : c.age < 13 && c.era.id === 'modern' ? '就学・手伝い' : c.occupation);

	let chronicleEl = $state<HTMLUListElement | null>(null);
	$effect(() => {
		c.chronicle.length;
		if (chronicleEl) {
			chronicleEl.scrollTo({ top: chronicleEl.scrollHeight, behavior: 'smooth' });
		}
	});
</script>

<header class="topbar">
	<div class="wrap tbar">
		<div class="brand">5000年分の<em>1</em></div>
		<div class="agebox">
			<div class="age mono">{c.age}<small>歳</small></div>
			<div class="yr">{formatYear(c.currentYear)} · {c.region.name}</div>
		</div>
		<div class="speed" role="group" aria-label="時間の流れ">
			<button aria-pressed={game.paused} onclick={() => game.togglePause()}>{game.paused ? '▶ 再開' : '❚❚ 一時停止'}</button>
			{#each speeds as s (s)}
				<button class="mono" aria-pressed={game.speed === s} onclick={() => game.setSpeed(s)}>{s}×</button>
			{/each}
			<button onclick={() => game.fastForward()}>次の決断まで »</button>
			<button onclick={() => game.quit()}>中断</button>
		</div>
	</div>
</header>

<div class="wrap life">
	<div class="col">
		<div class="panel idcard">
			<div class="top mono"><span>{c.era.shortName} · {formatYear(c.birthYear)}生</span><span>{c.sex === 'M' ? '男' : '女'}</span></div>
			<div class="in">
				<div class="nm">{c.name}</div>
				<dl>
					<dt>居所</dt><dd>{c.place}</dd>
					<dt>身分</dt><dd>{c.socialClass.name}</dd>
					<dt>仕事</dt><dd>{jobLabel}</dd>
					<dt>読み書き</dt><dd>{c.literate ? 'できる' : 'できない'}</dd>
				</dl>
			</div>
		</div>

		<div class="panel">
			<h3><span>状態</span><span class="lbl">0–100</span></h3>
			{#each stats as s (s.k)}
				<div class="stat"><span>{s.k}</span><div class="bar"><i style="width:{s.v}%"></i></div><span class="mono">{Math.round(s.v)}</span></div>
			{/each}
			<div class="money">
				<span class="lbl mtitle">収入</span>
				<div class="mgrid">
					<div><b>{c.annualIncomeUnits.toLocaleString('ja-JP')}</b><small>{c.region.currencyUnit} / 年</small></div>
					<div><b>約{formatYen(c.modernFeelJpy)}</b><small>現代の体感（年額）</small></div>
				</div>
			</div>
		</div>

		<div class="panel">
			<h3><span>家族</span></h3>
			<div class="fam">
				{#each living as f, i (i + f.name)}
					<div class="row"><span>{f.relation}</span><span>{f.name}</span></div>
				{/each}
				{#each gone as f, i (i + f.name)}
					<div class="row gone"><span>{f.relation}</span><span>{f.name}（{f.deathPlayerAge}歳のとき没）</span></div>
				{/each}
			</div>
		</div>
	</div>

	<div class="col">
		<div class="panel scene"><Scene region={c.region} /></div>
		<div class="panel">
			<h3><span>今年の重点</span><span class="lbl">いつでも変えられます</span></h3>
			<div class="chips">
				{#each focuses as f (f.id)}
					<button class="chip" aria-pressed={c.focus === f.id} onclick={() => (c.focus = f.id)}>{f.label}<small>{f.sub}</small></button>
				{/each}
			</div>
		</div>
		<div class="panel">
			<h3><span>人生の記録</span><span class="lbl">新しい順</span></h3>
			<ul class="feed">
				{#each c.feed as f (f.id)}
					<li class={f.type}>
						<span class="a mono">{f.age}歳</span>
						<span class="x">{f.text}{#if f.fact}<span class="f">資料 {f.fact}</span>{/if}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="col">
		<div class="panel">
			<h3><span>世界の出来事</span><span class="lbl">古い順 · 下へ追加</span></h3>
			<ul class="chronicle" bind:this={chronicleEl} aria-live="polite">
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
		</div>
		<div class="panel">
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
	</div>
</div>

{#if game.decision}
	{@const d = game.decision}
	<div class="scrim">
		<div class="dec" role="dialog" aria-modal="true" aria-label={d.title}>
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
	.topbar {
		position: sticky;
		top: 0;
		z-index: 20;
		background: var(--paper);
		border-bottom: 1px solid var(--rule);
	}
	.tbar {
		display: flex;
		align-items: center;
		gap: 18px;
		padding-block: 10px;
		flex-wrap: wrap;
	}
	.brand {
		font-family: var(--f-display);
		font-weight: 700;
		font-size: 18px;
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
		min-width: 200px;
	}
	.age {
		font-family: var(--f-display);
		font-size: 40px;
		font-weight: 700;
		line-height: 1;
	}
	.age small {
		font-size: 18px;
		font-weight: 500;
	}
	.yr {
		font-size: 13px;
		color: var(--ink2);
	}
	.speed {
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
	}
	.speed button {
		border: 1px solid var(--rule);
		background: var(--card);
		border-radius: 3px;
		padding: 6px 10px;
		font-size: 13px;
	}
	.speed button[aria-pressed='true'] {
		background: var(--ink);
		color: var(--paper);
		border-color: var(--ink);
	}
	.life {
		display: grid;
		grid-template-columns: 320px minmax(0, 1fr) 340px;
		gap: 20px;
		padding-block: 20px 60px;
		align-items: start;
	}
	@media (max-width: 1100px) {
		.life {
			grid-template-columns: 300px minmax(0, 1fr);
		}
		.col:last-child {
			grid-column: 1 / -1;
		}
	}
	@media (max-width: 760px) {
		.life {
			grid-template-columns: 1fr;
		}
	}
	.col {
		display: flex;
		flex-direction: column;
		gap: 16px;
		min-width: 0;
	}
	.idcard {
		padding: 0;
		overflow: hidden;
	}
	.top {
		background: var(--accent);
		color: var(--accent-ink);
		padding: 8px 14px;
		display: flex;
		justify-content: space-between;
		font-size: 11.5px;
	}
	.in {
		padding: 14px;
	}
	.nm {
		font-family: var(--f-display);
		font-size: 22px;
		font-weight: 700;
	}
	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 2px 10px;
		margin: 8px 0 0;
		font-size: 13px;
	}
	dt {
		color: var(--ink3);
		font-size: 12px;
	}
	dd {
		margin: 0;
	}
	.stat {
		display: grid;
		grid-template-columns: 5em 1fr 2.2em;
		gap: 10px;
		align-items: center;
		font-size: 13.5px;
		padding-block: 4px;
	}
	.stat .mono {
		text-align: right;
		font-size: 13px;
	}
	.money {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-top: 12px;
		border-top: 1px dashed var(--rule);
		padding-top: 10px;
	}
	.mtitle {
		font-size: 11px;
	}
	.mgrid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}
	.mgrid b {
		display: block;
		font-family: var(--f-display);
		font-size: 17px;
	}
	.mgrid small {
		color: var(--ink3);
		font-size: 12px;
	}
	.fam {
		display: flex;
		flex-direction: column;
		gap: 6px;
		font-size: 13.5px;
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
	.scene {
		padding: 0;
		overflow: hidden;
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
		padding: 6px 12px;
		font-size: 13.5px;
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		line-height: 1.25;
	}
	.chip small {
		font-size: 11px;
		color: var(--ink3);
	}
	.chip[aria-pressed='true'] {
		background: var(--stamp);
		border-color: var(--stamp);
		color: var(--paper);
	}
	.chip[aria-pressed='true'] small {
		color: inherit;
		opacity: 0.8;
	}
	.feed {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 560px;
		overflow-y: auto;
	}
	.feed li {
		display: grid;
		grid-template-columns: 3.4em minmax(0, 1fr);
		gap: 10px;
		padding: 9px 0;
		border-bottom: 1px solid var(--rule2);
		font-size: 14.5px;
	}
	.feed .a {
		font-size: 12px;
		color: var(--ink3);
		padding-top: 3px;
	}
	.feed .f {
		display: block;
		font-family: var(--f-mono);
		font-size: 11.5px;
		color: var(--ink3);
		margin-top: 3px;
	}
	.feed li.historical .x {
		color: var(--accent);
		font-weight: 600;
	}
	.feed li.decision .x {
		color: var(--ink2);
	}
	.feed li.danger .x,
	.feed li.loss .x {
		color: var(--bad);
	}
	.feed li.warm .x {
		color: var(--stamp);
	}
	.feed li.death .x {
		font-family: var(--f-display);
		font-size: 17px;
		font-weight: 700;
	}
	.chronicle {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 280px;
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
	.stats {
		grid-template-columns: 1fr auto;
	}
	.stats dd {
		text-align: right;
		font-family: var(--f-mono);
		font-size: 12.5px;
	}
	.src {
		margin: 10px 0 0;
		font-size: 12px;
		color: var(--ink3);
	}
</style>
