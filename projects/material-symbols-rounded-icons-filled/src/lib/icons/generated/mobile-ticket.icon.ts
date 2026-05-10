import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-ticket-icon',
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
  <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm80-280h240q17 0 28.5-11.5T640-360v-67q0-5-4-9.5t-9-5.5q-12-4-19.5-14.5T600-480q0-13 7.5-23.5T627-518q5-1 9-5.5t4-9.5v-67q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600v67q0 5 4 9.5t9 5.5q12 4 19.5 14.5T360-480q0 13-7.5 23.5T333-442q-5 1-9 5.5t-4 9.5v67q0 17 11.5 28.5T360-320Zm120-60q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-80q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-80q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Z"/>
</svg>`,
})
export class MsrfMobileTicketIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
