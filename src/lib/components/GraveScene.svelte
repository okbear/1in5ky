<script lang="ts">
	import type { RegionProfile } from '#lib/types';

	let { region }: { region: RegionProfile } = $props();
	const t = $derived(region.sceneTheme);
</script>

<svg viewBox="0 0 240 240" role="img" aria-label="{region.name}の墓標と黄昏" preserveAspectRatio="xMidYMid meet">
	<defs>
		<!-- 物悲しい黄昏・薄暮の夕暮れグラデーション -->
		<linearGradient id="duskSkySq" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#100b17" />
			<stop offset="35%" stop-color="#2a1523" />
			<stop offset="65%" stop-color="#582424" />
			<stop offset="85%" stop-color="#843a29" />
			<stop offset="100%" stop-color="#a65430" />
		</linearGradient>
		<radialGradient id="duskSunSq" cx="68%" cy="65%" r="40%">
			<stop offset="0%" stop-color="#e08443" stop-opacity="0.9" />
			<stop offset="40%" stop-color="#a6442e" stop-opacity="0.4" />
			<stop offset="100%" stop-color="#100b17" stop-opacity="0" />
		</radialGradient>
	</defs>

	<!-- 夕暮れの空と沈む夕陽 -->
	<rect width="240" height="240" fill="url(#duskSkySq)" />
	<circle cx="165" cy="150" r="38" fill="url(#duskSunSq)" />

	<!-- 宵の明星（金星・一番星） -->
	<circle cx="48" cy="42" r="1.8" fill="#fffef0" opacity="0.95" />
	<circle cx="48" cy="42" r="5" fill="#fffef0" opacity="0.25" />
	<line x1="48" y1="35" x2="48" y2="49" stroke="#fffef0" stroke-width="0.75" opacity="0.6" />
	<line x1="41" y1="42" x2="55" y2="42" stroke="#fffef0" stroke-width="0.75" opacity="0.6" />

	<!-- 遠景の夜空の星々 -->
	<circle cx="110" cy="30" r="1" fill="#fffef0" opacity="0.4" />
	<circle cx="190" cy="50" r="1" fill="#fffef0" opacity="0.45" />
	<circle cx="215" cy="28" r="0.8" fill="#fffef0" opacity="0.35" />

	<!-- 遠景の丘陵・荒野シルエット -->
	<path d="M0 162 Q60 148 130 156 T240 152 L240 240 L0 240 Z" fill="#20151c" opacity="0.8" />

	<!-- 近景の大地（墓地の地面） -->
	<rect y="168" width="240" height="72" fill="#140d12" />

	<!-- 時代・地域ごとの墓標シルエット -->
	{#if t.architecture === 'pyramid'}
		<!-- 古代エジプト：沈みゆく夕陽とピラミッド・マスタバ墳墓 -->
		<polygon points="35,168 85,95 135,168" fill="#140d12" />
		<polygon points="120,168 155,122 190,168" fill="#1c1218" opacity="0.85" />
		<polygon points="175,168 185,152 215,152 225,168" fill="#140d12" />
		<path d="M0 185 Q120 178 240 182 L240 240 L0 240 Z" fill="#100a0e" />
	{:else if t.architecture === 'ziggurat'}
		<!-- メソポタミア：泥レンガの階段積石墓と荒野 -->
		<polygon points="50,168 50,158 65,158 65,142 80,142 80,126 120,126 120,142 135,142 135,158 150,158 150,168" fill="#140d12" />
		<rect x="170" y="148" width="22" height="20" fill="#140d12" />
		<rect x="200" y="154" width="16" height="14" fill="#140d12" />
	{:else if t.architecture === 'classical'}
		<!-- 古典期（ローマ街道・漢）：アッピア街道の石碑・糸杉・円形墳丘 -->
		<!-- 糸杉（サイプレス） -->
		<path d="M40 168 Q34 130 40 100 Q46 130 40 168 Z" fill="#120c11" />
		<path d="M210 168 Q206 138 210 115 Q214 138 210 168 Z" fill="#180f15" opacity="0.8" />
		<!-- オベリスク・石碑 -->
		<rect x="75" y="120" width="14" height="48" fill="#140d12" />
		<polygon points="72,120 82,102 92,120" fill="#140d12" />
		<rect x="110" y="130" width="22" height="38" rx="4" fill="#140d12" />
		<path d="M148 168 Q170 142 192 168 Z" fill="#140d12" />
	{:else if t.architecture === 'medieval'}
		<!-- 中世（欧州・イスラム等）：石の十字架・枯れ木・ドーム石碑 -->
		<!-- 枯れ木 -->
		<path d="M38 168 L42 125 L32 105 M42 125 L54 112 M42 138 L28 130" stroke="#140d12" stroke-width="2.5" stroke-linecap="round" fill="none" />
		<!-- メインの十字架（少し傾いて風雨を耐えてきた風情） -->
		<g transform="rotate(-3 85 168)">
			<rect x="80" y="108" width="9" height="60" fill="#140d12" />
			<rect x="70" y="122" width="29" height="8" fill="#140d12" />
		</g>
		<!-- 丸みを帯びた石碑 -->
		<rect x="125" y="132" width="20" height="36" rx="9" fill="#140d12" />
		<!-- 小さな十字架 -->
		<rect x="175" y="128" width="7" height="40" fill="#140d12" />
		<rect x="168" y="136" width="21" height="6" fill="#140d12" />
	{:else if t.architecture === 'edo'}
		<!-- 江戸日本：野に佇む五輪塔、笠卒塔婆、無縁仏の丸墓石 -->
		<!-- 五輪塔 -->
		<rect x="68" y="155" width="26" height="13" fill="#140d12" />
		<circle cx="81" cy="144" r="10" fill="#140d12" />
		<polygon points="70,134 81,123 92,134" fill="#140d12" />
		<circle cx="81" cy="118" r="5" fill="#140d12" />
		<!-- 笠卒塔婆・角柱墓石 -->
		<rect x="125" y="130" width="16" height="38" fill="#140d12" />
		<polygon points="119,130 133,120 147,130" fill="#140d12" />
		<!-- 無縁仏の丸い墓石群 -->
		<rect x="165" y="142" width="14" height="26" rx="6" fill="#140d12" />
		<rect x="188" y="150" width="11" height="18" rx="5" fill="#140d12" />
	{:else if t.architecture === 'industrial'}
		<!-- 近代：鉄柵に囲まれた大理石の墓石・オベリスク -->
		<rect x="65" y="105" width="16" height="63" fill="#140d12" />
		<polygon points="62,105 73,88 84,105" fill="#140d12" />
		<rect x="105" y="122" width="24" height="46" rx="5" fill="#140d12" />
		<rect x="155" y="115" width="8" height="53" fill="#140d12" />
		<rect x="147" y="126" width="24" height="7" fill="#140d12" />
		<!-- 鉄柵シルエット -->
		{#each [45, 53, 90, 98, 138, 145, 185, 193] as x (x)}
			<line x1={x} y1="150" x2={x} y2="168" stroke="#140d12" stroke-width="2" />
		{/each}
	{:else}
		<!-- 現代：静かな芝生墓地の低い記念銘板と供花 -->
		<rect x="55" y="146" width="32" height="22" rx="3" fill="#140d12" />
		<rect x="110" y="150" width="36" height="18" rx="3" fill="#140d12" />
		<rect x="168" y="144" width="28" height="24" rx="3" fill="#140d12" />
		<!-- 供えられた花 -->
		<circle cx="94" cy="164" r="4" fill="#c47a45" opacity="0.75" />
		<circle cx="152" cy="164" r="3.5" fill="#d86e42" opacity="0.75" />
	{/if}

	<!-- 風に揺れるススキ・枯草のシルエット（手前） -->
	<path d="M18 178 Q24 158 32 148 M22 178 Q30 152 40 144 M200 176 Q194 156 182 148 M205 178 Q198 152 190 142 M222 180 Q216 160 208 152" stroke="#140d12" stroke-width="2" stroke-linecap="round" fill="none" />
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 1 / 1;
	}
</style>
