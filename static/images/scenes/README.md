# Regional header panoramas

`regional-panoramas.webp` is an original AI-generated illustrative landscape atlas
created for this project. It contains 3 columns × 12 rows of 4:1 panoramas, ordered
left to right, top to bottom. The full sheet is 1254 × 1254 pixels (about 536 KiB).
Each landscape represents a broad region and period, not a documentary view of a
specific city. Related regions may share a tile; the assignments are explicit in
`src/lib/data/sceneImages.ts` and follow the current environment region.

`Scene.svelte` clips one tile with an SVG viewBox and then fits that panorama to
the header. Do not use the full atlas as an ordinary cover image, which would
expose neighboring tiles. Keep the grid and assignments aligned when updating it.
