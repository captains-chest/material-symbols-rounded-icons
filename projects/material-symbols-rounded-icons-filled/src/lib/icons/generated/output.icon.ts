import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-output-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v40q0 17-11.5 28.5T800-680q-17 0-28.5-11.5T760-720v-40H200v560h560v-40q0-17 11.5-28.5T800-280q17 0 28.5 11.5T840-240v40q0 33-23.5 56.5T760-120H200Zm527-320H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h327l-75-76q-11-11-11.5-27.5T652-652q11-11 28-11t28 11l144 144q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L708-308q-11 11-27.5 11.5T652-308q-11-11-11-28t11-28l75-76Z"/>
</svg>`,
})
export class MsrfOutputIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
