## Problem Statement

As maintainers of a dual-package Angular icon library, we need stronger supply-chain and release integrity guarantees around our Pinned Sync Pipeline. Today, icon generation pulls embedded SVG content from a pinned upstream reference and publishes packages through a manual local flow. While this aligns with Manual-First Sync Governance and Committed Generated Sources, it does not yet enforce content-level SVG safety gates or trusted CI publish guarantees.

From the maintainer and consumer perspective, this creates avoidable risk: if upstream SVG content is unexpectedly unsafe or if a local publish environment is compromised, harmful artifacts could reach Consumer Applications despite deterministic generation and smoke checks.

## Solution

Introduce a security hardening layer that preserves existing architecture decisions (Per-Icon Component API, Pure Entrypoint Contract, Embedded-SVG Distribution, Dual-Package Distribution) while adding:

1. A strict SVG sanitization policy in the Parameterized Generation Core before component generation.
2. Deterministic forbidden-pattern validation in the existing smoke checks.
3. Explicit upstream policy enforcement in sync tooling to protect the Shared Upstream Pin contract.
4. Trusted CI-based publish path with provenance and branch/tag protection support.

This keeps the current bundle-first developer experience while reducing supply-chain and release compromise risk.

## User Stories

1. As a package maintainer, I want generated icon templates to strip unsafe SVG constructs, so that embedded output cannot carry active payloads.
2. As a package maintainer, I want the sync pipeline to fail fast on disallowed SVG markup, so that unsafe content is blocked before commit.
3. As a package maintainer, I want a single sanitization policy reused for outline and filled targets, so that behavior stays aligned under Shared Multi-Package Workspace rules.
4. As a package maintainer, I want sanitization decisions to be deterministic, so that Deterministic CI Baseline checks remain stable.
5. As a package maintainer, I want the smoke check to enforce forbidden pattern checks, so that accidental bypasses are caught early.
6. As a package maintainer, I want clear machine-readable failure output when sanitization blocks content, so that remediation is fast.
7. As a package maintainer, I want upstream source constraints validated at runtime, so that sync cannot silently drift away from Authoritative Pinned Reference Disclosure expectations.
8. As a package maintainer, I want the ref format constrained to immutable commit SHAs, so that generation is reproducible and auditable.
9. As a package maintainer, I want trusted CI publishing, so that release artifacts do not depend on local workstation trust.
10. As a package maintainer, I want provenance attached to published packages, so that consumers can verify artifact origin.
11. As a package maintainer, I want release guardrails to keep Lockstep Variant Versioning intact, so that outline and filled packages remain coordinated.
12. As a package maintainer, I want release checks to include sanitization and smoke security gates, so that readiness reflects security posture.
13. As a consumer application engineer, I want no API changes to icon imports, so that Single Entrypoint Imports remain stable.
14. As a consumer application engineer, I want icon rendering behavior unchanged, so that Container-Driven Sizing and Decorative-First Accessibility are preserved.
15. As a consumer application engineer, I want no runtime icon loading introduced, so that Compile-Time Icon Resolution remains intact.
16. As a security reviewer, I want an explicit documented threat model for embedded SVG distribution, so that future reviews can reason quickly about controls.
17. As a release manager, I want publish authorization to be tied to protected tags/branches, so that accidental or malicious release triggers are reduced.
18. As a release manager, I want hardened defaults without blocking manual-first sync decisions, so that governance remains practical.
19. As a contributor, I want actionable local checks matching CI behavior, so that I can validate changes before opening a PR.
20. As a repository owner, I want hardening changes to fit existing ADR direction, so that architecture remains coherent over time.
21. As a security reviewer, I want explicit allowlist/denylist policy for SVG tags and attributes, so that decisions are transparent.
22. As a maintainer, I want sanitized-content metrics in generation output, so that unexpected shifts are visible during sync updates.
23. As a maintainer, I want hardening to cover both sample and full sync modes, so that quick local workflows remain representative.
24. As a maintainer, I want release docs updated for trusted publishing, so that operational procedures are clear and repeatable.

## Implementation Decisions

- Add a deep module for SVG sanitization policy and normalization that accepts raw upstream SVG and returns safe, generation-ready template fragments.
- Keep sanitization centralized in the Parameterized Generation Core so both variant targets inherit identical behavior.
- Enforce a denylist for active SVG/HTML vectors (script-capable nodes, event-handler attributes, executable URI schemes), with optional allowlist tuning for future maintainability.
- Make sanitization failure deterministic and explicit, including per-icon error reporting suitable for CI logs.
- Extend smoke validation to include security invariants for generated component sources (forbidden pattern gate).
- Preserve Variant Naming Alignment, Per-Icon Component API, Standalone-Only Delivery, and Pure Entrypoint Contract; no public API changes are introduced.
- Add upstream policy guardrails in sync tooling to enforce expected source owner/repository and immutable reference requirements, reinforcing Shared Upstream Pin.
- Add release workflow controls to support trusted CI publishing and provenance while preserving Lockstep Variant Versioning semantics.
- Keep Embedded-SVG Distribution model, but with mandatory sanitization and validation layers as defense in depth.
- Update release governance documentation to distinguish sync governance (manual-first) from publish trust model (CI-trusted).

## Testing Decisions

- Good tests should assert external behavior and invariant outcomes (safe output accepted, unsafe input rejected, deterministic failures) rather than internal implementation details.
- Test the sanitization deep module with representative safe and unsafe SVG cases, ensuring stable outputs and blocked vectors.
- Test generation pipeline integration to verify sanitized output is what gets embedded into generated Icon Components.
- Test smoke security checks to ensure known forbidden patterns fail consistently across both outline and filled targets.
- Test upstream policy guards with valid and invalid source/ref configurations.
- Test release pipeline behavior in dry-run mode to confirm hardening gates execute before publish.
- Prior art: existing deterministic generation verification, build checks, and smoke-check scripts in the current Deterministic CI Baseline.

## Out of Scope

- Migrating away from Embedded-SVG Distribution to runtime icon registries.
- Redesigning the public API into a dynamic name-based icon resolver.
- Supporting additional icon families or variant matrix expansion beyond current Material Symbols Rounded target definitions.
- Large-scale CI platform migration unrelated to trusted publishing controls.
- Consumer application-level CSP/security header policy design.

## Further Notes

- This PRD aligns with the existing ADR direction: generated per-icon standalone components and pure entrypoints remain unchanged.
- The hardening effort is intentionally additive: improve supply-chain confidence without altering compile-time ergonomics or bundle-first characteristics.
- Operationally, this should be staged so that sanitization/validation lands before trusted publish rollout, minimizing release disruption.
