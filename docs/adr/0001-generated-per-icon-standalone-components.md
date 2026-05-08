# Generated per-icon standalone components with single pure entrypoint

We will publish `@captains-chest/material-symbols-rounded-icons` as a single Angular package containing generated standalone components (one component per icon) with embedded SVG templates. We chose this to preserve bundle-first behavior through static imports and tree-shaking while keeping consumer ergonomics simple via one root entrypoint. We explicitly avoid runtime icon registries, raw SVG asset exports, and NgModule wrappers in v1.
