import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-close-small-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M480-424 363.33-307q-11.07 11-28.17 11T307-307q-11-11-11-28t11-28l117-117-117-115.67q-11-11.07-11-28.17T307-652q11-11 28-11t28 11l117 117 115.67-117q11.07-11 28.17-11T652-652q12 12 12 28.5T652-596L535-480l117 116.67q11 11.07 11 28.17T652-307q-12 12-28.5 12T596-307L480-424Z"/>
</svg>`,
})
export class MsrfCloseSmallIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
