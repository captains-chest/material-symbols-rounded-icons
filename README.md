# @captains-chest/material-symbols-rounded-icons workspace

Angular workspace for a publishable Material Symbols Rounded icon library with a Storybook playground.

## Projects

- `projects/material-symbols-rounded-icons`: publishable standalone component library
- `stories/` + `.storybook/`: Storybook catalog browser playground

## Core commands

```bash
npm run sync:icons       # fetch + generate icon components from pinned upstream source
npm run build:lib        # build publishable Angular library
npm run storybook        # run Storybook playground
npm run ci:baseline      # determinism + build + smoke checks
npm run release:check    # full pre-publish validation + npm pack dry-run
npm run release:publish  # publish dist package to npm
```

## Generation scope

By default, `npm run sync:icons` generates the full Material Symbols Rounded set at the pinned upstream ref.

For fast local checks, use `npm run sync:icons:sample` to generate the sample list from `tools/icons/sample-icons.txt`.

The sync pipeline is pinned by `tools/icons/upstream.json`:
- family: Material Symbols Rounded
- variant: FILL=0, wght=400, GRAD=0, opsz=24

## Accessibility and rendering contract

- decorative-first (`aria-hidden` default)
- optional `ariaLabel` turns icon into `role="img"`
- `currentColor` fill
- host + SVG contract for container-driven sizing in flex layouts
