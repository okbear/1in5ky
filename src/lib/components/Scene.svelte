<script lang="ts">
	import type { RegionProfile } from '#lib/types';

	let { region }: { region: RegionProfile } = $props();
	const t = $derived(region.sceneTheme);
</script>

<svg viewBox="0 0 280 56" aria-hidden="true" preserveAspectRatio="xMidYMax slice">
	<defs>
		<linearGradient id="hdr-sky" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0" stop-color={t.skyTop} stop-opacity="0.75" />
			<stop offset="1" stop-color={t.skyBottom} stop-opacity="0.55" />
		</linearGradient>
	</defs>
	<rect width="280" height="56" fill="url(#hdr-sky)" />
	<circle cx="220" cy="15" r="7" fill={t.accent} opacity="0.65" />
	<rect y="44" width="280" height="12" fill={t.ground} opacity="0.8" />
	{#if t.architecture === 'ziggurat'}
		<polygon points="100,44 100,36 112,36 112,28 124,28 124,18 168,18 168,28 180,28 180,36 192,36 192,44" fill={t.accent} opacity="0.9" />
	{:else if t.architecture === 'pyramid'}
		<polygon points="78,44 130,8 182,44" fill={t.accent} opacity="0.9" />
		<polygon points="154,44 190,20 226,44" fill={t.accent} opacity="0.7" />
	{:else if t.architecture === 'classical'}
		<polygon points="94,18 150,6 206,18" fill={t.accent} opacity="0.85" />
		<rect x="98" y="18" width="104" height="4" fill={t.accent} />
		{#each [104, 124, 144, 164, 184] as x (x)}
			<rect {x} y="22" width="7" height="22" fill={t.accent} opacity="0.9" />
		{/each}
	{:else if t.architecture === 'medieval'}
		<rect x="100" y="16" width="22" height="28" fill={t.accent} opacity="0.92" />
		<polygon points="98,16 111,4 124,16" fill={t.accent} />
		<rect x="128" y="26" width="76" height="18" fill={t.accent} opacity="0.78" />
		{#each [128, 141, 154, 167, 180, 193] as x (x)}
			<rect {x} y="22" width="7" height="4" fill={t.accent} opacity="0.8" />
		{/each}
	{:else if t.architecture === 'edo'}
		<polygon points="84,30 132,14 180,30" fill={t.accent} opacity="0.92" />
		<rect x="96" y="30" width="72" height="14" fill={t.accent} opacity="0.7" />
		<polygon points="170,36 198,26 226,36" fill={t.accent} opacity="0.82" />
		<rect x="176" y="36" width="44" height="8" fill={t.accent} opacity="0.6" />
	{:else if t.architecture === 'industrial'}
		<rect x="94" y="24" width="84" height="20" fill={t.accent} opacity="0.9" />
		<polygon points="94,24 115,15 136,24 157,15 178,24" fill={t.accent} opacity="0.8" />
		<rect x="186" y="6" width="8" height="38" fill={t.accent} />
		<rect x="202" y="12" width="8" height="32" fill={t.accent} opacity="0.9" />
	{:else}
		<rect x="98" y="12" width="20" height="32" fill={t.accent} opacity="0.9" />
		<rect x="124" y="22" width="18" height="22" fill={t.accent} opacity="0.75" />
		<rect x="148" y="6" width="22" height="38" fill={t.accent} opacity="0.92" />
		<rect x="176" y="18" width="18" height="26" fill={t.accent} opacity="0.78" />
		<rect x="200" y="28" width="16" height="16" fill={t.accent} opacity="0.65" />
	{/if}
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
