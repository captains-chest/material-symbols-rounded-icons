import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-house-icon',
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
  <path d="M280-160q-33 0-56.5-23.5T200-240v-286l-80 61q-14 10-30 8.5T64-472q-10-14-8-30t16-26l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l111 85v-22q0-25 17.5-42.5T700-800q25 0 42.5 17.5T760-740v114l128 98q13 10 15.5 26t-7.5 30q-10 14-26 15.5t-30-8.5l-80-61v286q0 33-23.5 56.5T680-160h-40q-33 0-56.5-23.5T560-240v-80q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320v80q0 33-23.5 56.5T320-160h-40Zm120-399h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Z"/>
</svg>`,
})
export class MsrfHouseIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
