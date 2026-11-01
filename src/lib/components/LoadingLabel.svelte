<script lang="ts">
	let { loading, label }: { loading: boolean; label: string } = $props();
</script>

<span class="loading-label">
	<span class:concealed={loading}>{label}</span>
	{#if loading}<span class="spinner" aria-hidden="true"></span>{/if}
</span>

<style>
	.loading-label { position: relative; display: inline-grid; place-items: center; }
	.concealed { visibility: hidden; }
	.spinner {
		position: absolute;
		width: 1em;
		height: 1em;
		border: 2px solid currentColor;
		border-right-color: transparent;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}
	@keyframes spin { to { transform: rotate(360deg); } }
	@media (prefers-reduced-motion: reduce) { .spinner { animation: none; } }
</style>
