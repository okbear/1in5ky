<script lang="ts">
	import { theme } from '#lib/theme.svelte';

	const isDark = $derived(theme.current === 'dark');
</script>

<button
	type="button"
	class="theme-toggle"
	aria-pressed={isDark}
	aria-label="ダークモード"
	title={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
	onclick={() => theme.toggle()}
>
	<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		{#if isDark}
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
		{:else}
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
		{/if}
	</svg>
</button>

<style>
	.theme-toggle {
		display: inline-grid;
		place-items: center;
		width: 30px;
		height: 30px;
		padding: 0;
		border: 1px solid var(--rule);
		border-radius: 4px;
		background: transparent;
		color: var(--ink2);
		flex: none;
		transition:
			border-color 0.15s,
			color 0.15s;
	}
	.theme-toggle:hover {
		border-color: var(--ink3);
		color: var(--ink);
	}
</style>
