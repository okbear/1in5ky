<script lang="ts">
	import { game } from '#lib/game.svelte';
	import { ERAS } from '#lib/data/eras';
	import { expectedLifespan, formatYear, formatYen } from '#lib/engine/util';
	import { regionsForEra } from '#lib/data/regions';
	import { getBabyImage } from '#lib/data/babyImages';

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
	const baby = $derived(getBabyImage(c.region.id));
</script>

<section class="wrap roll">
	<div class="cert">
		<div class="band"><b>出生届</b><span class="mono">{c.era.periodLabel}</span></div>
		<div class="body">
			<div class="hero">
				<div class="portrait-card">
					<div class="frame">
						<img
							src={baby.src}
							alt="{c.name}の出生時の姿（{c.era.name}・{c.region.name}）"
							loading="eager"
							decoding="async"
						/>
						<span class="badge">出生時の姿</span>
					</div>
					<div class="caption">
						<span class="caption-title">{baby.caption}</span>
						<p class="caption-desc">{baby.sceneDetail}</p>
					</div>
				</div>

				<div class="bio">
					<span class="lbl">名前</span>
					<h2>{c.name}</h2>
					<p class="story">
						{formatYear(c.birthYear)}、{c.region.name}（{c.region.subName}）の{c.place}に、{c.socialClass.name}の{c.sex === 'M' ? '男の子' : '女の子'}として生まれました。{c.region.worldviewCommonSense}
					</p>
				</div>
			</div>

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
			<button class="ghost back" onclick={() => game.quit()}>最初に戻る</button>
			<div class="actions">
				<button class="ghost" onclick={() => game.roll()}>生まれ直す</button>
				<button class="cta" onclick={() => game.begin()}>人生を始める</button>
			</div>
		</div>
	</div>
</section>

<style>
	.roll {
		padding-block: clamp(24px, 5vh, 56px);
		display: grid;
		place-items: center;
		scroll-margin-top: 0;
	}
	.cert {
		width: min(780px, 100%);
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
	.hero {
		display: grid;
		grid-template-columns: 180px 1fr;
		gap: 20px;
		align-items: start;
		margin-bottom: 20px;
	}
	@media (max-width: 640px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 14px;
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
		background: var(--card2);
		border: 1px solid var(--rule);
		box-shadow: 0 2px 8px rgba(35, 28, 22, 0.08);
	}
	.frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}
	.frame:hover img {
		transform: scale(1.02);
	}
	.badge {
		position: absolute;
		bottom: 8px;
		right: 8px;
		background: rgba(35, 28, 22, 0.78);
		color: #fff;
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
	}
	.bio {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	h2 {
		font-family: var(--f-display);
		font-size: clamp(30px, 5vw, 44px);
		margin: 0;
		line-height: 1.15;
	}
	.story {
		margin: 12px 0 0;
		font-size: 15.5px;
		color: var(--ink2);
		line-height: 1.7;
	}
	.fields {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px 18px;
		border-top: 1px dashed var(--rule);
		padding-top: 18px;
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
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}
	.actions {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	@media (max-width: 560px) {
		.foot {
			flex-direction: column-reverse;
			align-items: stretch;
			gap: 10px;
		}
		.actions {
			display: grid;
			grid-template-columns: 1fr 1.3fr;
			width: 100%;
		}
		.back {
			text-align: center;
		}
	}
</style>
