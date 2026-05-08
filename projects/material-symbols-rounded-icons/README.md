# @captains-chest/material-symbols-rounded-icons

Standalone Angular icon components generated from Material Symbols Rounded.

## Usage

```ts
import { Component } from '@angular/core';
import { MsrHomeIconComponent } from '@captains-chest/material-symbols-rounded-icons';

@Component({
  standalone: true,
  imports: [MsrHomeIconComponent],
  template: `<div style="display:flex; width:24px; height:24px; color:#444;"><msr-home-icon /></div>`,
})
export class DemoComponent {}
```

Each icon component supports optional `ariaLabel` input:

```html
<msr-home-icon [ariaLabel]="'Home'" />
```
