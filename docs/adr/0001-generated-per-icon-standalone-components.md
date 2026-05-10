# Generated per-icon standalone components with pure entrypoints

We publish two Angular packages generated from one shared pipeline:
- `@captains-chest/material-symbols-rounded-icons` (outline, `msr-*` selectors)
- `@captains-chest/material-symbols-rounded-icons-filled` (filled, `msrf-*` selectors)

Each package contains generated standalone components (one component per icon) with embedded SVG templates and one pure root entrypoint. We chose this to preserve bundle-first behavior through static imports and tree-shaking while keeping variant usage explicit and collision-free. We explicitly avoid runtime icon registries, raw SVG asset exports, and NgModule wrappers.
