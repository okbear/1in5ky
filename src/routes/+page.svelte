<script lang="ts">
	import { page } from '$app/state';
	import { game } from '#lib/game.svelte';
	import Intro from '#lib/components/Intro.svelte';
	import Cert from '#lib/components/Cert.svelte';
	import Life from '#lib/components/Life.svelte';
	import Dead from '#lib/components/Dead.svelte';

	const siteTitle = '5000年分の1 · 1 in 5,000 Years · 人類史人生シミュレーション';
	const siteDesc =
		'文字が生まれた紀元前3000年から今日までに生を受けた約650億人。時代も身分もくじ引きのまま、当時の統計のなかで名もなきひとりの生涯をたどる歴史シミュレーション。';
	const origin = $derived(
		page.url.hostname === 'localhost' || page.url.hostname === '127.0.0.1'
			? 'https://1in5ky.vercel.app'
			: page.url.origin
	);
	$effect(() => {
		game.phase;
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});

	$effect(() => () => game.stop());
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="5000年分の1 · 1 in 5,000 Years" />
	<meta property="og:locale" content="ja_JP" />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDesc} />
	<meta property="og:url" content="{origin}/" />
	<meta property="og:image" content="{origin}/ogp.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="5000年分の1 · 1 in 5,000 Years" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDesc} />
	<meta name="twitter:image" content="{origin}/ogp.png" />
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
