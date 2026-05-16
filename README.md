# @captains-chest/material-symbols-rounded-icons workspace

Angular workspace for publishable Material Symbols Rounded icon libraries (outline + filled) with a Storybook-only playground.

## Workspace shape

- `projects/material-symbols-rounded-icons`: publishable outline standalone component library
- `projects/material-symbols-rounded-icons-filled`: publishable filled standalone component library
- `stories/` + `.storybook/`: Storybook catalog browser playground
- `src/main.ts`, `src/index.html`, and `src/styles.css`: minimal Angular Storybook host scaffolding only

There is intentionally no standalone Angular demo application. Storybook is the only playground surface.

Generated icon source files are committed because they are the public API under review. Build outputs such as `dist/` and `storybook-static/` are ignored and regenerated locally or in CI.

## Core commands

```bash
pnpm sync:icons       # fetch + generate icon components for outline + filled from pinned upstream source
pnpm build:lib        # build both publishable Angular libraries
pnpm storybook        # run Storybook playground
pnpm build-storybook  # build the Storybook playground
pnpm ci:baseline      # determinism + build + smoke checks
pnpm release:check    # full pre-publish validation + npm pack dry-run
pnpm release:publish  # publish dist packages to npm
```

## Generation scope

By default, `pnpm sync:icons` generates the full Material Symbols Rounded set for both outline and filled variants at the pinned upstream ref.

For fast local checks, use `pnpm sync:icons:sample` to generate the sample list from `tools/icons/sample-icons.txt`.

The sync pipeline is pinned by `tools/icons/upstream.json`:
- family: Material Symbols Rounded
- outline variant: FILL=0, wght=400, GRAD=0, opsz=24
- filled variant: FILL=1, wght=400, GRAD=0, opsz=24

## Accessibility and rendering contract

- decorative-first (`aria-hidden` default)
- optional `ariaLabel` turns icon into `role="img"`
- `currentColor` fill
- host + SVG contract for container-driven sizing in flex layouts
