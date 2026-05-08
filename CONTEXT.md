# Icon Pack

A reusable Angular icon library for consumer applications. It exists to provide Material Design SVG icons with predictable rendering behavior and minimal consumer bundle size.

## Language

**Icon**:
A reusable visual symbol represented as SVG content.
_Avoid_: Glyph, asset

**Icon Component**:
A shallow Angular component that renders exactly one **Icon**.
_Avoid_: Smart component, container

**Consumer Application**:
An application that imports this library and uses its **Icon Components**.
_Avoid_: Host, client app

**Bundle-First Strategy**:
A delivery strategy where minimizing consumer JavaScript/CSS payload is prioritized over API convenience.
_Avoid_: Convenience-first

**Per-Icon Component API**:
A public API where each Icon is consumed through its own standalone Angular component.
_Avoid_: Dynamic name-based icon API

**Material Symbols Rounded**:
The sole icon family included in v1 of the library.
_Avoid_: Mixed icon families in v1

**Normalized Symbol Variant**:
The fixed SVG variant profile used for every icon in v1: FILL=0, wght=400, GRAD=0, opsz=24.
_Avoid_: Per-icon variant proliferation in v1

**Selector Naming Contract**:
A deterministic naming rule where each icon component selector is `msr-<kebab-icon-name>-icon`.
_Avoid_: Ad-hoc selector naming

**Container-Driven Sizing**:
A rendering contract where icon components grow to available parent space by default and inherit color via `currentColor`, with host `display:flex; flex:1 1 auto; min-width:0; min-height:0` and inner SVG `width:100%; height:100%; fill:currentColor`.
_Avoid_: Intrinsic fixed icon sizing defaults

**Pinned Sync Pipeline**:
A generation workflow where icons are synced from a pinned upstream reference via a dedicated script, and deterministic generated outputs are committed.
_Avoid_: Network-dependent build-time fetching

**Full Upstream Inclusion**:
A scope rule where v1 includes every icon available in Material Symbols Rounded at the pinned upstream reference.
_Avoid_: Manual icon curation for v1

**Collision-Strict Generation**:
A generator policy that fails the sync process when naming collisions are detected, producing a collision report instead of auto-renaming.
_Avoid_: Silent renaming

**Icon SemVer Policy**:
A versioning rule where added icons are minor releases, removals/renames/rendering contract breaks are major releases, and non-API tooling fixes are patch releases.
_Avoid_: Unsignaled icon surface changes

**Single Entrypoint Imports**:
A consumer import policy where all icon components are imported from one root package entrypoint.
_Avoid_: Multiple consumer import patterns

**Compile-Time Icon Resolution**:
An icon delivery mode where all icon usage is resolved through static imports and build-time tree-shaking, with no runtime lazy icon fetching.
_Avoid_: Runtime icon loading in v1

**Decorative-First Accessibility**:
An accessibility contract where icons are `aria-hidden` by default and become labeled images only when an explicit `ariaLabel` is provided.
_Avoid_: Implicitly announced decorative icons

**Deterministic CI Baseline**:
A minimum quality gate that requires deterministic generation, successful production build, and a consumer smoke test for rendering and accessibility behavior.
_Avoid_: Build-only validation

**Library+Playground Workspace**:
A workspace structure where the publishable icon library and a non-publishable demo application coexist.
_Avoid_: Library-only workspace in v1

**Storybook Playground**:
A Storybook-based interactive surface used as the primary demo/playground for validating icon rendering and usage patterns.
_Avoid_: Ad-hoc demo pages as primary playground

**Catalog Browser Story**:
A Storybook pattern where icon exploration is centralized in a searchable/filterable catalog story instead of per-icon stories.
_Avoid_: One-story-per-icon at v1 scale

**Single-Package Distribution**:
A publishing model where the entire v1 icon surface is released as one npm package.
_Avoid_: Multi-package splitting in v1

**Manual-First Sync Governance**:
A release governance model where upstream icon synchronization is triggered explicitly by maintainers in v1, while keeping the pipeline automation-ready.
_Avoid_: Mandatory scheduled auto-sync in v1

**Traceable Upstream Compliance**:
A packaging requirement that ships upstream license attribution and generation provenance metadata, including the pinned source reference.
_Avoid_: Opaque generated provenance

**Pure Entrypoint Contract**:
A packaging rule that keeps the root entrypoint side-effect-free and limited to static symbol re-exports to preserve tree-shaking.
_Avoid_: Executable barrel logic

**Embedded-SVG Distribution**:
A package output model where SVG markup is shipped only as embedded templates inside generated icon components, with no standalone SVG asset exports.
_Avoid_: Raw SVG artifact distribution

**Committed Generated Sources**:
A repository policy where generated icon components are checked into version control rather than produced only at publish time.
_Avoid_: Publish-only generation

**Package Identity**:
The published npm package name is `@captains-chest/material-symbols-rounded-icons`.
_Avoid_: Unscoped or generic package naming

**Standalone-Only Delivery**:
A framework contract where all icon components are published as Angular standalone components with no NgModule wrapper API.
_Avoid_: Dual standalone/NgModule surfaces in v1

## Relationships

- A **Consumer Application** imports one or more **Icon Components**
- Each **Icon Component** renders exactly one **Icon**
- The library follows a **Bundle-First Strategy** for API and packaging decisions
- The public surface uses a **Per-Icon Component API**
- Each **Icon Component** belongs to **Material Symbols Rounded** in v1
- Each v1 **Icon Component** uses the same **Normalized Symbol Variant**
- Each **Icon Component** selector follows the **Selector Naming Contract**
- Each **Icon Component** uses **Container-Driven Sizing** by default
- **Container-Driven Sizing** is implemented through a shared host/SVG CSS contract
- The library artifacts are produced via a **Pinned Sync Pipeline**
- v1 icon scope follows **Full Upstream Inclusion**
- The **Pinned Sync Pipeline** enforces **Collision-Strict Generation**
- Published library versions follow the **Icon SemVer Policy**
- **Consumer Applications** import **Icon Components** through **Single Entrypoint Imports**
- v1 uses **Compile-Time Icon Resolution**
- Each **Icon Component** follows **Decorative-First Accessibility**
- Release readiness is validated by a **Deterministic CI Baseline**
- The repository uses a **Library+Playground Workspace**
- The playground experience is provided by a **Storybook Playground**
- The **Storybook Playground** is centered on a **Catalog Browser Story**
- The library is released through **Single-Package Distribution**
- Upstream updates follow **Manual-First Sync Governance**
- Published artifacts satisfy **Traceable Upstream Compliance**
- **Single Entrypoint Imports** are implemented under a **Pure Entrypoint Contract**
- Distribution follows **Embedded-SVG Distribution**
- Generated icon sources follow **Committed Generated Sources**
- **Single-Package Distribution** is published under **Package Identity**
- The component surface follows **Standalone-Only Delivery**

## Example dialogue

> **Dev:** "Should we expose one dynamic icon component that can render any icon by name?"
> **Domain expert:** "Only if it preserves the **Bundle-First Strategy**; otherwise prefer explicit **Icon Components**."

## Flagged ambiguities

- "all icons available" could mean "all icons published" or "all icons bundled into every app" — resolved: all icons should be published, but only used icons should be bundled in a **Consumer Application**.
- "shallow components" was ambiguous — resolved: use a **Per-Icon Component API** backed by shared rendering behavior, with no icon-specific business logic.
- "all Material icons" was ambiguous — resolved: v1 scope is only **Material Symbols Rounded**.
- "all variants" was ambiguous — resolved: v1 ships one **Normalized Symbol Variant** only.
- Component naming was unspecified — resolved with a strict **Selector Naming Contract** using the `msr-<kebab-icon-name>-icon` pattern.
- Brand prefix choice was unspecified — resolved to `msr-` for selector alignment.
- Icon layout default was unclear — resolved: use **Container-Driven Sizing** (parent controls size; icon grows by default).
- Flex behavior details were unspecified — resolved with an explicit host/SVG CSS contract.
- Upstream ingestion strategy was unspecified — resolved with a **Pinned Sync Pipeline** (sync script + committed generated outputs).
- "all icons" inclusion policy was unclear — resolved as **Full Upstream Inclusion** for v1.
- Naming collision handling was unspecified — resolved with **Collision-Strict Generation** (fail fast + report).
- Version bump behavior for upstream icon changes was unspecified — resolved with an explicit **Icon SemVer Policy**.
- Import ergonomics were undecided — resolved to **Single Entrypoint Imports** to avoid consumer confusion.
- Runtime loading expectations were unspecified — resolved to **Compile-Time Icon Resolution** for v1.
- Accessibility behavior was unspecified — resolved with **Decorative-First Accessibility**.
- CI quality expectations were vague — resolved with a **Deterministic CI Baseline**.
- Repository shape was undecided — resolved to a **Library+Playground Workspace**.
- Playground technology was unspecified — resolved to a **Storybook Playground**.
- Story granularity at icon scale was unclear — resolved to a **Catalog Browser Story** approach.
- Publish topology was undecided — resolved to **Single-Package Distribution** for v1.
- Sync cadence governance was unspecified — resolved to **Manual-First Sync Governance** (automation-ready, but maintainer-triggered in v1).
- Licensing and provenance requirements were unspecified — resolved with **Traceable Upstream Compliance** metadata in the package.
- Tree-shaking guarantees under single-entrypoint imports were unclear — resolved with a **Pure Entrypoint Contract**.
- SVG artifact scope was unclear — resolved to **Embedded-SVG Distribution** only.
- Generation lifecycle in version control was undecided — resolved to **Committed Generated Sources**.
- Package scope/name was unspecified — resolved to **Package Identity** `@captains-chest/material-symbols-rounded-icons`.
- Angular API shape was unspecified — resolved to **Standalone-Only Delivery**.
