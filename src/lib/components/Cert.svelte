<script lang="ts">
	import { game } from '#lib/game.svelte';
	import { ERAS } from '#lib/data/eras';
	import { expectedLifespan, formatYear, formatYen } from '#lib/engine/util';
	import { regionsForEra } from '#lib/data/regions';

	const c = $derived(game.char!);
	const regionShare = $derived(
		(regionsForEra(c.era.id).find((r) => r.id === c.region.id)?.birthWeight ?? 0) / 100
	);
	const peersOku = $derived(ERAS[c.era.id].cumulativeBirthsOku * regionShare);
	const peerText = $derived(
		peersOku >= 1 ? `約${peersOku.toFixed(1)}億人` : `約${Math.round(peersOku * 10000).toLocaleString('ja-JP')}万人`
	);
	const u5 = $derived(Math.round(c.region.under5Mortality / 10));
	const e0 = $derived(Math.round(expectedLifespan(c.region, c.socialClass.mortalityMultiplier)));
</script>

<section class="wrap roll">
	<div class="cert">
		<div class="band"><b>出生届</b><span class="mono">{c.era.periodLabel}</span></div>
		<div class="body">
			<span class="lbl">名前</span>
			<h2>{c.name}</h2>
			<p class="story">
				{formatYear(c.birthYear)}、{c.region.name}（{c.region.subName}）の{c.place}に、{c.socialClass.name}の{c.sex === 'M' ? '男の子' : '女の子'}として生まれました。{c.region.worldviewCommonSense}
			</p>
			<div class="fields">
				<div><span class="lbl">時代</span><b>{c.era.name}</b></div>
				<div><span class="lbl">地域</span><b>{c.region.name}</b></div>
				<div><span class="lbl">身分</span><b>{c.socialClass.name}</b></div>
				<div><span class="lbl">主食</span><b>{c.region.dietStaple}</b></div>
				<div><span class="lbl">家の暮らし向き</span><b>年 {c.annualIncomeUnits.toLocaleString('ja-JP')} {c.region.currencyUnit}（体感 約{formatYen(c.modernFeelJpy)}）</b></div>
				<div><span class="lbl">平均寿命・識字率</span><b>約{e0}歳 · 識字率 {c.region.literacyRate}%</b></div>
			</div>
			<div class="odds">
				同じ時代の同じ地域に生まれた人は、人類史で{peerText}。この時代には、5歳までに{u5}%が亡くなります。
			</div>
		</div>
		<div class="foot">
			<button class="ghost" onclick={() => game.roll()}>生まれ直す</button>
			<button class="cta" onclick={() => game.begin()}>人生を始める</button>
		</div>
	</div>
</section>

<style>
	.roll {
		padding-block: 48px;
		display: grid;
		place-items: center;
	}
	.cert {
		width: min(720px, 100%);
		background: var(--card);
		border: 1px solid var(--rule);
		border-radius: 4px;
		box-shadow: var(--shadow);
		overflow: hidden;
	}
	.band {
		background: var(--accent);
		color: var(--accent-ink);
		padding: 12px 22px;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 12px;
		flex-wrap: wrap;
	}
	.band b {
		font-family: var(--f-display);
		font-size: 18px;
	}
	.band span {
		font-size: 12px;
		opacity: 0.85;
	}
	.body {
		padding: 22px;
	}
	h2 {
		font-family: var(--f-display);
		font-size: clamp(30px, 5vw, 44px);
		margin: 0;
		line-height: 1.15;
	}
	.story {
		margin: 12px 0 18px;
		font-size: 16px;
		color: var(--ink2);
	}
	.fields {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px 18px;
		border-top: 1px dashed var(--rule);
		padding-top: 16px;
	}
	@media (max-width: 560px) {
		.fields {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	.fields b {
		display: block;
		font-size: 15px;
		font-weight: 600;
	}
	.odds {
		margin-top: 16px;
		padding: 12px 14px;
		background: var(--stamp-soft);
		border-radius: 3px;
		font-size: 13.5px;
	}
	.foot {
		padding: 0 22px 22px;
		display: flex;
		justify-content: flex-end;
		gap: 10px;
	}
</style>
