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

## Upstream availability disclaimer

This package only publishes icons that exist upstream for Material Symbols Rounded (filled variant) at the pinned source ref used for this release.

Authoritative source for release availability: `ICON_MANIFEST.source` in this package.

Catalog browser (mutable, for discovery only): https://fonts.google.com/icons?icon.style=Rounded
