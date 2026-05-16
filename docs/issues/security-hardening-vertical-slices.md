# Security hardening plan → vertical slices (local draft)

Source plan: `docs/prd/security-hardening-prd.md`

## Proposed breakdown

1. **Title**: Approve SVG sanitization policy contract
   - **Type**: HITL
   - **Blocked by**: None
   - **User stories covered**: 1, 3, 7, 8, 16, 21

2. **Title**: Enforce sanitized Embedded-SVG generation for one end-to-end icon flow
   - **Type**: AFK
   - **Blocked by**: 1
   - **User stories covered**: 1, 2, 3, 4, 13, 14, 15, 20

3. **Title**: Add forbidden-pattern smoke gate and deterministic failure reporting
   - **Type**: AFK
   - **Blocked by**: 2
   - **User stories covered**: 5, 6, 12, 19, 23

4. **Title**: Enforce Shared Upstream Pin policy in sync workflow
   - **Type**: AFK
   - **Blocked by**: None
   - **User stories covered**: 7, 8, 18, 20

5. **Title**: Wire hardening checks into Deterministic CI Baseline
   - **Type**: AFK
   - **Blocked by**: 3, 4
   - **User stories covered**: 4, 12, 19, 23

6. **Title**: Introduce trusted CI publish path with provenance for Dual-Package Distribution
   - **Type**: HITL
   - **Blocked by**: 5
   - **User stories covered**: 9, 10, 11, 17, 18

7. **Title**: Update release governance docs for manual-first sync + trusted publish
   - **Type**: AFK
   - **Blocked by**: 6
   - **User stories covered**: 18, 24

---

## Local issue drafts (ready to copy to tracker later)

## What to build

Define and approve the sanitization contract used by the Pinned Sync Pipeline for Embedded-SVG Distribution. The contract must specify disallowed nodes/attributes/schemes, deterministic failure behavior, and how policy applies equally to outline and filled targets in the Shared Multi-Package Workspace.

## Acceptance criteria

- [ ] Sanitization policy is documented as a clear contract aligned with Traceable Upstream Compliance.
- [ ] Policy explicitly covers blocked elements, blocked attributes, and blocked URI schemes.
- [ ] Policy defines deterministic failure/reporting behavior for rejected icons.

## Blocked by

None - can start immediately.

---

## What to build

Implement sanitization inside the Parameterized Generation Core so generated Icon Components always embed safe SVG fragments while preserving Per-Icon Component API behavior, Container-Driven Sizing, and Decorative-First Accessibility.

## Acceptance criteria

- [ ] Sync generation sanitizes all incoming upstream SVG before component emission.
- [ ] Sanitized output remains deterministic across reruns against the same Shared Upstream Pin.
- [ ] Public consumer contracts (Single Entrypoint Imports, Standalone-Only Delivery, selector/class naming) remain unchanged.

## Blocked by

- Slice 1: Approve SVG sanitization policy contract

---

## What to build

Extend smoke validation with forbidden-pattern checks for generated output and deterministic, actionable error reporting so unsafe embedded content is blocked pre-release.

## Acceptance criteria

- [ ] Smoke checks fail on forbidden SVG/script execution patterns.
- [ ] Failure output identifies affected icon(s) clearly for maintainers.
- [ ] The check runs in local validation and CI baseline flows.

## Blocked by

- Slice 2: Enforce sanitized Embedded-SVG generation for one end-to-end icon flow

---

## What to build

Add runtime guardrails to sync configuration validation to enforce expected source owner/repository and immutable ref format, reinforcing Shared Upstream Pin and Authoritative Pinned Reference Disclosure.

## Acceptance criteria

- [ ] Sync fails when source owner/repository is outside approved policy.
- [ ] Sync fails when reference is not immutable/approved format.
- [ ] Policy violations are reported with deterministic, actionable messages.

## Blocked by

None - can start immediately.

---

## What to build

Integrate the new sanitization and upstream-policy controls into the Deterministic CI Baseline so security hardening is treated as a required release gate for both variant packages.

## Acceptance criteria

- [ ] CI baseline includes sanitization + forbidden-pattern gates for outline and filled targets.
- [ ] CI fails on policy violations before build/publish stages.
- [ ] Baseline remains deterministic for full and sample sync workflows.

## Blocked by

- Slice 3: Add forbidden-pattern smoke gate and deterministic failure reporting
- Slice 4: Enforce Shared Upstream Pin policy in sync workflow

---

## What to build

Introduce a trusted CI publishing flow for Dual-Package Distribution with provenance, while preserving Lockstep Variant Versioning and existing release readiness checks.

## Acceptance criteria

- [ ] Publish path runs in CI with trusted identity/provenance.
- [ ] Outline and filled packages are released in lockstep from one controlled flow.
- [ ] Publish is protected by branch/tag gating and pre-publish hardening checks.

## Blocked by

- Slice 5: Wire hardening checks into Deterministic CI Baseline

---

## What to build

Update release governance documentation so maintainers can operate a Manual-First Sync Governance model with trusted CI publish controls and clear procedures.

## Acceptance criteria

- [ ] Release docs describe the trusted publish path and required checks.
- [ ] Docs clarify the distinction between sync governance and publish trust model.
- [ ] Docs remain aligned with ADR and glossary terms.

## Blocked by

- Slice 6: Introduce trusted CI publish path with provenance for Dual-Package Distribution
