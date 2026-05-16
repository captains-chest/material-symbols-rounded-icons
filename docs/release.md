# Release and publish

This repository uses two separate governance models:

- **Manual-first sync governance**: maintainers decide when to update the pinned upstream Material Symbols commit in `tools/icons/upstream.json`.
- **Trusted publish governance**: packages are published from GitHub Actions on protected release tags, with npm provenance attached.

## Prerequisites

1. npm trusted publishing or `NPM_TOKEN` is configured for the `npm-publish` GitHub environment.
2. The `npm-publish` environment requires repository-owner approval.
3. Release tags matching `v*.*.*` are protected.
4. The outline and filled package manifests use the same version.

## Validate before release

```bash
npm run release:check
```

This runs:

- SVG sanitizer and upstream policy tests
- deterministic generated-source verification
- both library builds
- smoke checks, including forbidden SVG pattern gates
- npm pack dry-runs from `dist/material-symbols-rounded-icons`
- npm pack dry-runs from `dist/material-symbols-rounded-icons-filled`

## Manual-first icon sync

Syncing remains a maintainer-controlled local action:

```bash
npm run sync:icons
npm run ci:baseline
```

The sync command enforces the Shared Upstream Pin policy before generation. The upstream owner must remain `google`, the repository must remain `material-design-icons`, and `ref` must be a 40-character immutable commit SHA.

## Trusted publish flow

1. Confirm the release check passes locally:

   ```bash
   npm run release:check
   ```

2. Commit the version bump and generated-source state.
3. Create and push a protected tag matching the lockstep package version:

   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

4. GitHub Actions runs `.github/workflows/publish.yml` in the `npm-publish` environment.
5. The workflow verifies tag/package version lockstep, runs release checks, then publishes both packages with `npm publish --provenance`.

## Lockstep variant versioning

The publish workflow releases the outline and filled packages from one controlled flow. `tools/release/verify-lockstep-version.mjs` fails the release if:

- the tag does not use `v<semver>` format
- package versions differ
- the tag version does not match both package versions

## Emergency local publish

Local publishing is not the normal trust path. If maintainers must publish manually, use:

```bash
npm run release:publish
```

This still runs hardening checks first and passes `--provenance` to npm where supported, but repository owners should prefer the protected CI workflow for repeatable artifact provenance.

## Suggested post-publish checks

```bash
npm view @captains-chest/material-symbols-rounded-icons version
npm view @captains-chest/material-symbols-rounded-icons-filled version
npm view @captains-chest/material-symbols-rounded-icons dist.integrity
npm view @captains-chest/material-symbols-rounded-icons-filled dist.integrity
```
