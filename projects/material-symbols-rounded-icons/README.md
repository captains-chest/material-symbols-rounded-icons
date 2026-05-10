# @captains-chest/material-symbols-rounded-icons

Standalone Angular outline icon components generated from Material Symbols Rounded.

## Usage

```ts
import { Component } from '@angular/core';
import { MsrHomeIconComponent } from '@captains-chest/material-symbols-rounded-icons';

@Component({
  imports: [MsrHomeIconComponent],
  template: `<div style="display:flex; width:24px; height:24px; color:#444;"><msr-home-icon /></div>`,
})
export class DemoComponent {}
```

Each icon component supports optional `ariaLabel` input:

```html
<msr-home-icon [ariaLabel]="'Home'" />
```

## Upstream availability disclaimer

This package only publishes icons that exist upstream for Material Symbols Rounded (outline variant) at the pinned source ref used for this release.

Authoritative source for release availability: `ICON_MANIFEST.source` in this package.

Catalog browser (mutable, for discovery only): https://fonts.google.com/icons?icon.style=Rounded
