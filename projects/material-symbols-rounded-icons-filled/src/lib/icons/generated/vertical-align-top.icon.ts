import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-vertical-align-top-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M200-760q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h560q17 0 28.5 11.5T800-800q0 17-11.5 28.5T760-760H200Zm280 640q-17 0-28.5-11.5T440-160v-368l-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l144-144q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l144 144q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76v368q0 17-11.5 28.5T480-120Z"/>
</svg>`,
})
export class MsrfVerticalAlignTopIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
