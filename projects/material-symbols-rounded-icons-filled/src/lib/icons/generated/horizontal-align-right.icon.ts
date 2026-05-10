import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-horizontal-align-right-icon',
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
  <path d="M771.5-171.5Q760-183 760-200v-560q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v560q0 17-11.5 28.5T800-160q-17 0-28.5-11.5ZM528-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h368l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l144 144q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-308q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76Z"/>
</svg>`,
})
export class MsrfHorizontalAlignRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
