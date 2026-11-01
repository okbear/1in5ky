<script lang="ts">
	import type { RegionProfile } from '#lib/types';
	import { REGION_SCENES, SCENE_ATLAS, SCENE_COLUMNS, SCENE_ROWS } from '#lib/data/sceneImages';

	let { region }: { region: RegionProfile } = $props();
	const tile = $derived(REGION_SCENES[region.id]);
	// Crop the atlas to one complete panorama before fitting it to the header.
	const viewBox = $derived(`${(tile % SCENE_COLUMNS) * 4} ${Math.floor(tile / SCENE_COLUMNS)} 4 1`);
</script>

<svg {viewBox} aria-hidden="true" preserveAspectRatio="xMidYMid slice" data-region={region.id}>
	<image href={SCENE_ATLAS} width={SCENE_COLUMNS * 4} height={SCENE_ROWS} />
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
