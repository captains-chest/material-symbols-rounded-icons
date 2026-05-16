# SVG sanitization policy

The Pinned Sync Pipeline embeds upstream Material Symbols SVG fragments into generated Angular components. This policy defines the mandatory safety contract before any fragment can be emitted.

## Scope

The policy applies to every icon variant generated from `tools/icons/upstream.json`, including outline and filled packages. The same sanitizer is used for sample and full sync modes.

## Threat model

Embedded SVG distribution must prevent active payloads from entering consumer applications through generated component templates. The primary risks are script execution, event-handler execution, executable URLs, external document inclusion, and HTML-in-SVG embedding.

The pipeline does not attempt to redesign consumer CSP, add runtime loading, or support arbitrary SVG. It accepts the static subset required by Material Symbols paths and rejects content outside that subset.

## Allowed content

Generated fragments may contain only static SVG markup needed by Material Symbols:

- container/grouping and shape elements: `path`, `g`, `defs`, `clipPath`, `mask`, `rect`, `circle`, `ellipse`, `line`, `polyline`, `polygon`, `use`, `linearGradient`, `radialGradient`, `stop`
- static presentation attributes such as `d`, `fill`, `stroke`, `stroke-width`, `stroke-linecap`, `stroke-linejoin`, `stroke-miterlimit`, `stroke-opacity`, `fill-rule`, `clip-rule`, `opacity`, `transform`, `x`, `y`, `x1`, `x2`, `y1`, `y2`, `cx`, `cy`, `r`, `rx`, `ry`, `width`, `height`, `points`, `viewBox`, `id`, `class`, `style`, `clip-path`, `mask`, `href`, `xlink:href`, `offset`, `stop-color`, and `stop-opacity`

URI-bearing attributes may only contain local fragment references such as `#shape-id` or CSS wrappers around local fragments such as `url(#shape-id)`.

## Denied content

The sanitizer rejects an icon if it contains any of the following:

- active or document-loading elements: `script`, `iframe`, `object`, `embed`, `foreignObject`, `audio`, `video`, `canvas`, `image`, `link`, `meta`, `base`, `form`, `input`, `button`, `textarea`, `select`, `option`, `style`
- event-handler attributes such as `onclick`, `onload`, or any attribute beginning with `on`
- executable or remote URI schemes including `javascript:`, `data:`, `vbscript:`, `file:`, `http:`, `https:`, and protocol-relative URLs
- unknown SVG elements or attributes outside the allowlist

## Deterministic failure behavior

Sanitization is fail-closed. A rejected icon stops generation for that target and reports:

- target id
- icon name
- source SVG path
- machine-readable violation codes and details

Violation ordering is deterministic so CI output remains stable across reruns.
