# Release and publish

## Prerequisites

1. npm account has access to scope `@captains-chest`
2. local npm auth is configured:

```bash
npm login
npm whoami
```

## Validate before publish

```bash
npm run release:check
```

This runs:
- deterministic generation check
- library build
- smoke checks
- npm pack dry-run from `dist/material-symbols-rounded-icons`

## Publish

```bash
npm run release:publish
```

## Suggested post-publish

1. Tag release in git (example):
```bash
git tag v0.1.0
git push origin v0.1.0
```
2. Verify package on npm:
```bash
npm view @captains-chest/material-symbols-rounded-icons version
```
