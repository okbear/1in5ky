<script lang="ts">
	import { game } from '#lib/game.svelte';
	import { formatYear } from '#lib/engine/util';
	import Timeline from './Timeline.svelte';

	const c = $derived(game.char!);
	const pm = $derived(game.pm);
	const lostKids = $derived(c.family.filter((f) => f.relation === '子' && !f.alive).length);
	const kids = $derived(c.family.filter((f) => f.relation === '子').length);
	const stars = $derived(c.feed.filter((f) => f.type === 'historical' || f.type === 'danger').reverse());
</script>

<section class="wrap dead">
	<div class="dcert">
		<div class="band mono">
			<span>{c.ongoing ? '2026年の地平線' : '死亡証明'}</span>
			<span>{c.era.periodLabel}</span>
		</div>
		<div class="body">
			<div>
				<h1>{c.name}</h1>
				<div class="span mono">{formatYear(c.birthYear)} — {c.ongoing ? '現在' : formatYear(c.currentYear)} · {c.age}歳</div>
				{#if c.ongoing}
					<p class="cause">この人生は、いまも続いています。</p>
				{:else}
					<p class="cause">死因：<b>{c.deathCause}</b></p>
				{/if}
				<p class="ctx">{c.epitaph}</p>
				{#if stars.length > 0}
					<ul class="stars">
						{#each stars as s (s.id)}
							<li><span class="mono">{s.age}歳</span> {s.text}</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="summary">
				<div><small>地域</small><b>{c.region.name}</b></div>
				<div><small>身分</small><b>{c.socialClass.name}</b></div>
				<div><small>仕事</small><b>{c.age < 6 ? `幼少（${c.socialClass.name}の子）` : c.occupation}</b></div>
				<div><small>子ども</small><b>{kids}人{lostKids > 0 ? `（うち${lostKids}人を亡くした）` : ''}</b></div>
				<div><small>最終的な状態</small><b>健康{Math.round(c.health)} · 幸福{Math.round(c.happiness)} · 知識{Math.round(c.knowledge)} · 関係{Math.round(c.relations)}</b></div>
				<div><small>この時代の平均像</small><b>5歳までに{Math.round(c.region.under5Mortality / 10)}%が亡くなった</b></div>
			</div>
		</div>
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
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
		gap: 28px;
	}
	@media (max-width: 860px) {
		.body {
			grid-template-columns: 1fr;
		}
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
	.stars {
		list-style: none;
		margin: 14px 0 0;
		padding: 0;
		font-size: 14px;
		color: var(--ink2);
	}
	.stars li {
		padding: 4px 0;
	}
	.summary {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 14px 18px;
		align-content: start;
	}
	.summary div {
		border-top: 1px solid var(--rule);
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
