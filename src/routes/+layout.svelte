<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { game } from '#lib/game.svelte';
	import { theme } from '#lib/theme.svelte';

	let { children } = $props();

	$effect(() => {
		theme.hydrate();
		game.hydrate();
		inject({
			mode: import.meta.env.DEV ? 'development' : 'production'
		});
	});
</script>
{@render children()}
