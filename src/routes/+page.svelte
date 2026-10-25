<script lang="ts">
	import { game } from '#lib/game.svelte';
	import Intro from '#lib/components/Intro.svelte';
	import Cert from '#lib/components/Cert.svelte';
	import Life from '#lib/components/Life.svelte';
	import Dead from '#lib/components/Dead.svelte';

	$effect(() => {
		game.phase;
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});

	$effect(() => () => game.stop());
</script>

<svelte:head>
	<title>5000年分の1 · 1 in 5,000 Years · 人類史人生シミュレーション</title>
</svelte:head>

{#if game.phase === 'intro'}
	<Intro />
{:else if game.phase === 'cert' && game.char}
	<Cert />
{:else if game.phase === 'life' && game.char}
	<Life />
{:else if game.phase === 'dead' && game.char}
	<Dead />
{/if}
