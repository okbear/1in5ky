# Birth portraits

The 87 region-named `.webp` files were generated for this project to complete the
previously missing regional portraits. Each is a separate 400 × 400 image in a
representational oil-painting style, with a swaddled newborn and a setting inspired
by the region and period. They are illustrative scenes, not documentary records
or a depiction of every social class, family, or birthplace in that region.

Existing `.jpg` portraits are preserved. Assignments and localized captions are
in `src/lib/data/babyImages.ts`. The data-consistency test requires every region
to have an existing asset and a finished caption; the certificate E2E checks that
a formerly missing region actually loads its portrait in the browser.
