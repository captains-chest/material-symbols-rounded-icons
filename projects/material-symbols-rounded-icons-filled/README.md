# @captains-chest/material-symbols-rounded-icons-filled

Standalone Angular filled icon components generated from Material Symbols Rounded.

## Usage

```ts
import { Component } from '@angular/core';
import { MsrfHomeIconComponent } from '@captains-chest/material-symbols-rounded-icons-filled';

@Component({
  imports: [MsrfHomeIconComponent],
  template: `<div style="display:flex; width:24px; height:24px; color:#444;"><msrf-home-icon /></div>`,
})
export class DemoComponent {}
```

Each icon component supports optional `ariaLabel` input:

```html
<msrf-home-icon [ariaLabel]="'Home'" />
```

## Angular compatibility matrix (`@captains-chest/material-symbols-rounded-icons-filled`)

> Tested in real Angular apps (`angular-16` … `angular-21`) with manual visual pages showing 10 outline/filled icon pairs side-by-side.

| Angular version | Standalone | NgModule | Status |
|---|---:|---:|---|
| 16 | ❌ | ❌ | Not compatible |
| 17 | ✅ | ✅ | Verified working |
| 18 | ✅ | ✅ | Verified working |
| 19 | ✅ | N/A | Verified working |
| 20 | ✅ | N/A | Verified working |
| 21 | ✅ | N/A | Verified working |

### Why Angular 16 does not work

Angular 16 fails at compile time because this library exposes `InputSignal`-based component inputs in its type declarations.
Angular 16’s `@angular/core` does **not** export `InputSignal`, so TypeScript errors out before runtime:

- `TS2694: Namespace '@angular/core' has no exported member 'InputSignal'`

In short: the package output relies on newer Angular signal-input APIs that are unavailable in Angular 16.

## Support this project

If these icons save you time, you can support my work here:

<a href="https://www.buymeacoffee.com/captainDuckay" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Upstream availability disclaimer

This package only publishes icons that exist upstream for Material Symbols Rounded (filled variant) at the pinned source ref used for this release.

Authoritative source for release availability: `ICON_MANIFEST.source` in this package.

Catalog browser (mutable, for discovery only): https://fonts.google.com/icons?icon.style=Rounded
