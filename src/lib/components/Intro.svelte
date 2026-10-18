<script lang="ts">
	import { game } from '#lib/game.svelte';
	import { ERAS, ERA_ORDER, TOTAL_CUMULATIVE_BIRTHS_OKU } from '#lib/data/eras';
	import Timeline from './Timeline.svelte';
</script>

<section class="wrap intro">
	<div class="hero">
		<p class="kicker mono">紀元前3000年〜2026年 · 人類史人生シミュレーション</p>
		<h1>5000年分の<em>1</em></h1>
		<p class="en">1 in 5,000 Years</p>
		<p class="lede">
			紀元前3000年から今日までに、地球には約{TOTAL_CUMULATIVE_BIRTHS_OKU}億人が生まれてきました。あなたはそのひとりになって、たった一度の人生を生きます。いつ、どこで、誰の子として生まれるかは選べません。あなたがそうだったように。
		</p>
	</div>

	<div class="panel odds">
		<h3><span>人類の出生を時代で分けると</span><span class="lbl">紀元前3000年以降 約650億人</span></h3>
		{#each ERA_ORDER as id (id)}
			{@const e = ERAS[id]}
			<div class="orow">
				<span>{e.name}</span>
				<div class="bar"><i style="width:{e.birthSharePercent * 4}%; background:{e.accentColor}"></i></div>
				<span class="mono">{e.birthSharePercent}%</span>
			</div>
		{/each}
	</div>

	<div class="ctarow">
		<button class="cta" onclick={() => game.roll()}>生まれる</button>
	</div>

	<div class="panel memo">
		<h3>
			<span>5000年のメモリアル</span>
			<span class="lbl">
				{game.memorials.length > 0 ? `生きた記録 ${game.memorials.length} 件` : '名もなき人々の墓標'}
			</span>
		</h3>
		<Timeline records={game.allMemorials} />
		<ul>
			{#each game.allMemorials.slice(0, 6) as r (r.id)}
				<li>
					<b>{r.name}</b>
					<span class="mono">{r.eraName} · {r.deathAge}歳</span>
					<small>{r.summaryLine} — {r.deathCause}</small>
				</li>
			{/each}
		</ul>
		{#if game.memorials.length > 0}
			<button class="ghost" onclick={() => game.clearMemorials()}>記録を消す</button>
		{/if}
	</div>
</section>

<style>
	.intro {
		padding-block: 48px 80px;
		display: flex;
		flex-direction: column;
		gap: 28px;
	}
	.kicker {
		font-size: 12px;
		color: var(--stamp);
		margin: 0;
	}
	h1 {
		font-family: var(--f-display);
		font-size: clamp(52px, 11vw, 140px);
		line-height: 0.95;
		letter-spacing: -0.02em;
		margin: 12px 0 8px;
	}
	h1 em {
		font-style: normal;
		color: var(--accent);
	}
	.en {
		font-family: var(--f-mono);
		letter-spacing: 0.16em;
		color: var(--ink3);
		margin: 0 0 22px;
	}
	.lede {
		font-size: 18px;
		color: var(--ink2);
		max-width: 36em;
		margin: 0;
	}
	.odds {
		max-width: 560px;
	}
	.orow {
		display: grid;
		grid-template-columns: 8em 1fr 3.4em;
		gap: 10px;
		align-items: center;
		font-size: 14px;
		padding-block: 3px;
	}
	.orow .mono {
		text-align: right;
		color: var(--ink2);
	}
	.ctarow {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
	}
	.memo ul {
		list-style: none;
		margin: 0 0 12px;
		padding: 0;
	}
	.memo li {
		padding: 8px 0;
		border-bottom: 1px solid var(--rule2);
		display: grid;
		gap: 2px;
	}
	.memo li span {
		font-size: 12px;
		color: var(--ink3);
	}
	.memo li small {
		color: var(--ink2);
	}
</style>
