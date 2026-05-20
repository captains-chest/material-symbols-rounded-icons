import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-payment-arrow-down-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M480-97q8 0 15-2.5t13-8.5l104-104q11-11 11-28t-11-28q-11-11-28-11t-28 11l-36 36v-88q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320v88l-36-36q-11-11-28-11t-28 11q-11 11-11 28t11 28l104 104q6 6 13 8.5t15 2.5Zm0-423q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM200-400q-33 0-56.5-23.5T120-480v-320q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v320q0 33-23.5 56.5T760-400H200Zm0-80h80q0-33-23.5-56.5T200-560v80Zm480 0h80v-80q-33 0-56.5 23.5T680-480Zm80-240v-80h-80q0 33 23.5 56.5T760-720Zm-560 0q33 0 56.5-23.5T280-800h-80v80Z"/>
</svg>`,
})
export class MsrfPaymentArrowDownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
