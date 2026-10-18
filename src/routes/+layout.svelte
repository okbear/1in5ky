<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';

	let { children } = $props();

	$effect(() => {
		inject({
			mode: import.meta.env.DEV ? 'development' : 'production'
		});
	});
</script>
{@render children()}
