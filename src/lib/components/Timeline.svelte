<script lang="ts">
	import { formatYear } from '#lib/engine/util';
	import type { MemorialRecord } from '#lib/types';

	let { records, highlightId }: { records: MemorialRecord[]; highlightId?: string } = $props();

	const START = -3000;
	const maxDeath = $derived(
		records.reduce((m, r) => (Number.isFinite(r.deathYear) ? Math.max(m, r.deathYear) : m), 2026)
	);
	const END = $derived(Math.min(2200, Math.max(2030, Math.ceil(maxDeath / 10) * 10)));
	const pos = (y: number) => Math.min(100, Math.max(0, ((y - START) / (END - START)) * 100));
	const ticks = $derived([-3000, -2000, -1000, 0, 1000, 2000, ...(END >= 2100 ? [2100] : [])]);
</script>

<div class="tl" role="img" aria-label="人類5000年の年表。あなたが生きた時代に墓標が並びます。">
	<div class="axis">
		{#each ticks as t (t)}
			<span class="tick" style="left:{pos(t)}%"><i></i><small>{formatYear(t)}</small></span>
		{/each}
		{#each records as r (r.id)}
			<span
				class="stone"
				class:me={r.id === highlightId}
				style="left:{pos(r.birthYear)}%; width:{Math.max(0.6, pos(r.deathYear) - pos(r.birthYear))}%"
				title="{r.name}（{formatYear(r.birthYear)}〜{formatYear(r.deathYear)} / {r.deathAge}歳 / {r.regionName}）"
			></span>
		{/each}
	</div>
</div>

<style>
	.tl {
		padding: 10px 48px 28px;
	}
	.axis {
		position: relative;
		height: 28px;
		border-bottom: 2px solid var(--ink3);
	}
	.tick {
		position: absolute;
		bottom: -2px;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tick i {
		width: 1px;
		height: 8px;
		background: var(--ink3);
	}
	.tick small {
		position: absolute;
		top: 12px;
		white-space: nowrap;
		font-size: 11px;
		color: var(--ink3);
		font-family: var(--f-mono);
	}
	.stone {
		position: absolute;
		bottom: 0;
		height: 14px;
		min-width: 3px;
		background: var(--ink3);
		opacity: 0.6;
		border-radius: 2px 2px 0 0;
	}
	.stone.me {
		background: var(--accent);
		opacity: 1;
		height: 24px;
	}
</style>
