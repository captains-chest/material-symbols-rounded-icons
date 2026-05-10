import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stat-minus-1-icon',
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
  <path d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11.5-27.5T268-613q11-11 28-11t28 11l156 155 156-155q11-11 27.5-11.5T692-613q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z"/>
</svg>`,
})
export class MsrfStatMinus1IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
