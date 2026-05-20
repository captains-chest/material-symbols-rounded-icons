import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-warning-off-icon',
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
  <path d="M480-240q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-160q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-41l-80-80v121Zm-43-276q-10-10-12-23.5t5-25.5l55-95q6-11 15-15.5t20-4.5q11 0 20.5 4.5T515-820l284 490q9 15-5 26t-27-2L397-676ZM791-57l-64-63H109q-23 0-34-20t0-40l259-447 279 278H499L55-792q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Z"/>
</svg>`,
})
export class MsrfWarningOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
