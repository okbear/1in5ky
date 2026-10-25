<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { game } from '#lib/game.svelte';

	let { children } = $props();

	$effect(() => {
		game.hydrate();
		inject({
			mode: import.meta.env.DEV ? 'development' : 'production'
		});
	});
</script>
{@render children()}
