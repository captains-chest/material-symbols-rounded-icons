import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stat-minus-2-icon',
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
  <path d="m480-313 156-155q11-11 27.5-11.5T692-468q11 11 11 28t-11 28L537-257q-23 23-57 23t-57-23L268-412q-11-11-11.5-27.5T268-468q11-11 28-11t28 11l156 155Zm0-240 156-155q11-11 27.5-11.5T692-708q11 11 11 28t-11 28L537-497q-23 23-57 23t-57-23L268-652q-11-11-11.5-27.5T268-708q11-11 28-11t28 11l156 155Z"/>
</svg>`,
})
export class MsrfStatMinus2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
