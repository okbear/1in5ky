<script lang="ts">
	import { game } from '#lib/game.svelte';
	import { ageGroup, expectedLifespan, formatYear, survivalRateAtAge } from '#lib/engine/util';
	import type { FeedEntry } from '#lib/types';
	import Timeline from './Timeline.svelte';
	import GraveScene from './GraveScene.svelte';
	import { getGraveInfo } from '#lib/data/graveData';

	const c = $derived(game.char!);
	const pm = $derived(game.pm);
	const lostKids = $derived(c.family.filter((f) => f.relation === '子' && !f.alive).length);
	const kids = $derived(c.family.filter((f) => f.relation === '子').length);
	const e0 = $derived(Math.round(expectedLifespan(c.region, c.socialClass.mortalityMultiplier)));
	const survPct = $derived(survivalRateAtAge(c.region, c.age) * 100);
	const survLabel = $derived(
		survPct >= 10 ? `${Math.round(survPct)}%` : `${Math.max(0.1, survPct).toFixed(1)}%`
	);
	const STAGE_LABEL = {
		infant: '誕生・乳児期',
		child: '子ども時代',
		youth: '青年期',
		adult: '壮年期',
		elder: '晩年'
	} as const;

	type Row = {
		kind: 'life' | 'world';
		key: string;
		year: number;
		age: number;
		type: FeedEntry['type'] | 'world';
		text: string;
		sub?: string;
		tag?: string;
		major: boolean;
	};
	type Item = Row | { kind: 'stage'; key: string; label: string };

	let showAll = $state(false);

	// feed は新しい順・chronicle は古い順。年代順にそろえ、同じ年は世界の出来事を先に置く。
	const rows = $derived.by<Row[]>(() => {
		const life = [...c.feed].reverse().map<Row>((f) => ({
			kind: 'life',
			key: `l-${f.id}`,
			year: f.year,
			age: f.age,
			type: f.type,
			text: f.text,
			sub: f.fact ? `資料 ${f.fact}` : undefined,
			major: f.type !== 'normal'
		}));
		const world = c.chronicle.map<Row>((ev) => ({
			kind: 'world',
			key: `w-${ev.id}`,
			year: ev.year,
			age: ev.age,
			type: 'world',
			text: ev.title,
			sub: ev.description,
			tag: ev.regionTag,
			major: true
		}));
		return [...world, ...life].sort((a, b) =>
			a.year !== b.year ? a.year - b.year : a.kind === b.kind ? 0 : a.kind === 'world' ? -1 : 1
		);
	});
	const visible = $derived.by<Item[]>(() => {
		const out: Item[] = [];
		let stage: ReturnType<typeof ageGroup> | null = null;
		for (const r of rows) {
			if (!showAll && !r.major) continue;
			const g = ageGroup(r.age);
			if (g !== stage) {
				stage = g;
				out.push({ kind: 'stage', key: `s-${g}`, label: STAGE_LABEL[g] });
			}
			out.push(r);
		}
		return out;
	});
	const grave = $derived(getGraveInfo(c.region.id));
</script>

<section class="wrap dead">
	<div class="dcert">
		<div class="band mono">
			<span>死亡証明</span>
			<span>{c.era.periodLabel}</span>
		</div>
		<div class="body">
			<div class="hero">
				<div class="portrait-card">
					<div class="frame">
						<GraveScene region={c.region} />
						<span class="badge">永眠の地</span>
					</div>
					<div class="caption">
						<span class="caption-title">{grave.title}</span>
						<p class="caption-desc">{grave.desc}</p>
					</div>
				</div>

				<div class="bio">
					<h1>{c.name}</h1>
					<div class="span mono">{formatYear(c.birthYear)} — {formatYear(c.currentYear)} · {c.age}歳</div>
					<p class="cause">死因：<b>{c.deathCause}</b></p>
					<p class="ctx">{c.epitaph}</p>
				</div>
			</div>

			<div class="summary">
				<div><small>地域</small><b>{c.region.name}</b></div>
				<div><small>身分</small><b>{c.socialClass.name}</b></div>
				<div><small>仕事</small><b>{c.age < 6 ? `幼少（${c.socialClass.name}の子）` : c.occupation}</b></div>
				<div><small>子ども</small><b>{kids}人{lostKids > 0 ? `（うち${lostKids}人を亡くした）` : ''}</b></div>
				<div><small>最終的な状態</small><b>健康{Math.round(c.health)} · 幸福{Math.round(c.happiness)} · 知識{Math.round(c.knowledge)} · 関係{Math.round(c.relations)}</b></div>
				<div>
					<small>同世代の生存統計</small>
					<b>
						{#if c.age === 0}
							同じ地域に生まれた子の{Math.round(c.region.infantMortality / 10)}%が1歳未満で亡くなった（平均寿命 約{e0}歳）
						{:else}
							{c.age}歳まで生きられたのは同世代の約{survLabel}（平均寿命 約{e0}歳）
						{/if}
					</b>
				</div>
			</div>
		</div>
	</div>

	<div class="panel ltl-panel">
		<h3>
			<span>あなたの人生の年表</span>
			<span class="lbl">{formatYear(c.birthYear)} → {formatYear(c.currentYear)}</span>
		</h3>
		<div class="seg" role="group" aria-label="年表の表示範囲">
			<button type="button" class:on={!showAll} aria-pressed={!showAll} onclick={() => (showAll = false)}>
				おもな出来事
			</button>
			<button type="button" class:on={showAll} aria-pressed={showAll} onclick={() => (showAll = true)}>
				すべての年
			</button>
		</div>
		<ol class="ltl">
			{#each visible as it (it.key)}
				{#if it.kind === 'stage'}
					<li class="stage"><span>{it.label}</span></li>
				{:else}
					<li class="ev {it.type}">
						<span class="when mono">{it.age}歳<small>{formatYear(it.year)}</small></span>
						<span class="what">
							{#if it.tag}<em class="tag">{it.tag}</em>{/if}
							<b>{it.text}</b>
							{#if it.sub}<small>{it.sub}</small>{/if}
						</span>
					</li>
				{/if}
			{/each}
		</ol>
	</div>

	{#if pm && (pm.events.length > 0 || pm.belief)}
		<div class="panel after">
			<h3><span>あなたが亡くなったあと、世界は</span><span class="lbl">{formatYear(c.currentYear)}以降</span></h3>
			{#if pm.events.length > 0}
				<ul>
					{#each pm.events as e (e.year)}
						<li>
							<span class="mono yr">{e.yearsAfterDeath}年後</span>
							<span><b>{formatYear(e.year)} {e.title}</b><br />{e.description}</span>
						</li>
					{/each}
				</ul>
			{/if}
			{#if pm.belief}
				<p class="belief">
					あなたの時代の常識「{pm.belief.belief}」は、のちに覆されます。{pm.belief.overturned}
				</p>
			{/if}
		</div>
	{/if}

	<div class="panel">
		<h3><span>5000年のメモリアル</span><span class="lbl">赤い墓標がこの人生（灰色は過去・名もなき人々）</span></h3>
		<Timeline records={game.allMemorials} highlightId={c.id} />
	</div>

	<div class="endbtns">
		<button class="cta" onclick={() => game.roll()}>もう一度生まれる</button>
		<button class="ghost" onclick={() => game.quit()}>最初に戻る</button>
	</div>
</section>

<style>
	.dead {
		padding-block: clamp(24px, 4vh, 48px) 64px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		scroll-margin-top: 0;
	}
	.dcert {
		background: var(--card);
		border: 1px solid var(--rule);
		border-radius: 4px;
		box-shadow: var(--shadow);
		overflow: hidden;
	}
	.band {
		background: var(--loss);
		color: var(--paper);
		padding: 12px 22px;
		display: flex;
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
		font-size: 12px;
	}
	.body {
		padding: 24px 22px;
	}
	.hero {
		display: grid;
		grid-template-columns: 180px 1fr;
		gap: 24px;
		align-items: start;
		margin-bottom: 24px;
	}
	@media (max-width: 640px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 16px;
		}
	}
	.portrait-card {
		display: flex;
		flex-direction: column;
		gap: 8px;
		max-width: 180px;
	}
	@media (max-width: 640px) {
		.portrait-card {
			max-width: 160px;
			margin: 0 auto;
			text-align: center;
		}
	}
	.frame {
		position: relative;
		width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: 4px;
		overflow: hidden;
		background: #100b17;
		border: 1px solid var(--rule);
		box-shadow: 0 2px 8px rgba(35, 28, 22, 0.08);
	}
	.badge {
		position: absolute;
		bottom: 8px;
		right: 8px;
		background: rgba(16, 11, 23, 0.85);
		color: #f4eee2;
		font-size: 11px;
		padding: 2px 8px;
		border-radius: 3px;
		letter-spacing: 0.03em;
		backdrop-filter: blur(4px);
		pointer-events: none;
	}
	.caption {
		font-size: 12px;
		color: var(--ink3);
		line-height: 1.5;
		padding: 2px 4px;
	}
	.caption-title {
		display: block;
		font-weight: 600;
		color: var(--ink2);
		margin-bottom: 2px;
	}
	.caption-desc {
		margin: 0;
		line-height: 1.45;
	}
	.bio {
		min-width: 0;
	}
	h1 {
		font-family: var(--f-display);
		font-size: clamp(34px, 6vw, 58px);
		line-height: 1.08;
		margin: 0 0 6px;
	}
	.span {
		color: var(--ink2);
		font-size: 14px;
	}
	.cause {
		margin-top: 18px;
		font-size: 18px;
	}
	.cause b {
		color: var(--accent);
	}
	.ctx {
		color: var(--ink2);
		font-size: 14.5px;
	}
	.seg {
		display: inline-flex;
		border: 1px solid var(--rule);
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 14px;
	}
	.seg button {
		background: transparent;
		border: 0;
		padding: 8px 14px;
		font-size: 13px;
		color: var(--ink2);
	}
	.seg button + button {
		border-left: 1px solid var(--rule);
	}
	.seg button.on {
		background: var(--accent);
		color: var(--accent-ink);
		font-weight: 600;
	}
	.ltl {
		list-style: none;
		margin: 0;
		padding: 0 0 0 14px;
		border-left: 2px solid var(--rule);
	}
	.ltl li {
		position: relative;
	}
	.ltl .stage {
		padding: 14px 0 4px 14px;
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0.08em;
		color: var(--ink3);
	}
	.ltl .ev {
		display: grid;
		grid-template-columns: 4.6em minmax(0, 1fr);
		gap: 10px;
		padding: 8px 0 8px 14px;
		font-size: 14.5px;
	}
	.ltl .ev::before {
		content: '';
		position: absolute;
		left: -21px;
		top: 15px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--card);
		border: 2px solid var(--ink3);
	}
	.ltl .when {
		font-size: 12px;
		color: var(--ink3);
		padding-top: 2px;
		line-height: 1.35;
	}
	.ltl .when small {
		display: block;
		font-size: 11px;
	}
	.ltl .what {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
		overflow-wrap: anywhere;
	}
	.ltl .what b {
		font-weight: 500;
	}
	.ltl .what small {
		font-size: 12px;
		color: var(--ink3);
		line-height: 1.45;
	}
	.ltl .tag {
		font-style: normal;
		font-size: 11px;
		color: var(--stamp);
	}
	.ltl .ev.world .what b {
		color: var(--ink2);
	}
	.ltl .ev.historical::before,
	.ltl .ev.milestone::before {
		background: var(--accent);
		border-color: var(--accent);
	}
	.ltl .ev.historical .what b {
		color: var(--accent);
		font-weight: 600;
	}
	.ltl .ev.decision::before {
		border-color: var(--ink);
	}
	.ltl .ev.danger::before,
	.ltl .ev.loss::before {
		background: var(--bad);
		border-color: var(--bad);
	}
	.ltl .ev.danger .what b,
	.ltl .ev.loss .what b {
		color: var(--bad);
	}
	.ltl .ev.warm::before {
		background: var(--stamp);
		border-color: var(--stamp);
	}
	.ltl .ev.world::before {
		border-style: dashed;
	}
	.ltl .ev.death::before {
		background: var(--loss);
		border-color: var(--loss);
		width: 14px;
		height: 14px;
		left: -23px;
		top: 13px;
	}
	.ltl .ev.death .what b {
		font-family: var(--f-display);
		font-size: 18px;
		font-weight: 700;
	}
	.summary {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 14px 18px;
		border-top: 1px solid var(--rule);
		padding-top: 20px;
	}
	@media (max-width: 560px) {
		.summary {
			grid-template-columns: 1fr;
		}
	}
	.summary div {
		border-top: 1px solid var(--rule2);
		padding-top: 8px;
	}
	.summary b {
		display: block;
		font-size: 15px;
	}
	.summary small {
		color: var(--ink3);
		font-size: 12px;
	}
	.after ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.after li {
		display: grid;
		grid-template-columns: 5.5em 1fr;
		gap: 12px;
		padding: 10px 0;
		border-bottom: 1px solid var(--rule2);
		font-size: 14.5px;
	}
	.yr {
		font-size: 12px;
		color: var(--ink3);
		padding-top: 3px;
	}
	.belief {
		margin: 14px 0 0;
		padding: 10px 12px;
		border-left: 3px solid var(--accent);
		background: var(--accent-soft);
		font-family: var(--f-display);
	}
	.endbtns {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
</style>
