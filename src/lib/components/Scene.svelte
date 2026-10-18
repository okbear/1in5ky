<script lang="ts">
	import type { RegionProfile } from '#lib/types';

	let { region }: { region: RegionProfile } = $props();
	const t = $derived(region.sceneTheme);
</script>

<svg viewBox="0 0 320 100" role="img" aria-label="{region.name}の風景" preserveAspectRatio="xMidYMid slice">
	<defs>
		<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0" stop-color={t.skyTop} />
			<stop offset="1" stop-color={t.skyBottom} />
		</linearGradient>
	</defs>
	<rect width="320" height="100" fill="url(#sky)" />
	<circle cx="260" cy="24" r="9" fill={t.accent} opacity="0.5" />
	<rect y="72" width="320" height="28" fill={t.ground} />
	{#if t.architecture === 'ziggurat'}
		<polygon points="90,72 90,62 100,62 100,52 110,52 110,42 150,42 150,52 160,52 160,62 170,62 170,72" fill={t.accent} opacity="0.85" />
	{:else if t.architecture === 'pyramid'}
		<polygon points="70,72 130,22 190,72" fill={t.accent} opacity="0.85" />
		<polygon points="160,72 200,40 240,72" fill={t.accent} opacity="0.6" />
	{:else if t.architecture === 'classical'}
		<rect x="90" y="40" width="120" height="6" fill={t.accent} />
		{#each [96, 120, 144, 168, 192] as x (x)}
			<rect {x} y="46" width="8" height="26" fill={t.accent} opacity="0.85" />
		{/each}
	{:else if t.architecture === 'medieval'}
		<rect x="90" y="40" width="22" height="32" fill={t.accent} opacity="0.9" />
		<polygon points="88,40 101,24 114,40" fill={t.accent} />
		<rect x="120" y="52" width="80" height="20" fill={t.accent} opacity="0.7" />
		{#each [120, 134, 148, 162, 176, 190] as x (x)}
			<rect {x} y="48" width="8" height="4" fill={t.accent} opacity="0.7" />
		{/each}
	{:else if t.architecture === 'edo'}
		<polygon points="80,56 130,40 180,56" fill={t.accent} opacity="0.9" />
		<rect x="92" y="56" width="76" height="16" fill={t.accent} opacity="0.6" />
		<polygon points="170,64 200,54 230,64" fill={t.accent} opacity="0.75" />
		<rect x="176" y="64" width="48" height="8" fill={t.accent} opacity="0.5" />
	{:else if t.architecture === 'industrial'}
		<rect x="90" y="46" width="90" height="26" fill={t.accent} opacity="0.85" />
		<rect x="188" y="22" width="9" height="50" fill={t.accent} />
		<rect x="206" y="32" width="9" height="40" fill={t.accent} opacity="0.85" />
		<circle cx="193" cy="16" r="7" fill="#fff" opacity="0.5" />
	{:else}
		<rect x="90" y="30" width="22" height="42" fill={t.accent} opacity="0.85" />
		<rect x="118" y="44" width="20" height="28" fill={t.accent} opacity="0.7" />
		<rect x="144" y="22" width="24" height="50" fill={t.accent} opacity="0.9" />
		<rect x="174" y="48" width="18" height="24" fill={t.accent} opacity="0.65" />
	{/if}
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 32 / 10;
	}
</style>
