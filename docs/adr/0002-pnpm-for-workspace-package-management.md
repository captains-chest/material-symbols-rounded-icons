# pnpm for workspace package management

We use pnpm as the repository package manager for installs, lockfile generation, and workspace script execution because its strict default dependency isolation makes undeclared dependencies visible while keeping installs reproducible. We keep npm registry commands (`npm pack`, `npm publish --provenance`, and `npm view`) for package verification and publishing so release behavior remains aligned with npm provenance and registry workflows.
