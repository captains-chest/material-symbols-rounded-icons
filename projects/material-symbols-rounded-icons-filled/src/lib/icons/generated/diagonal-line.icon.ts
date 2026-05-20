import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-diagonal-line-icon',
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
  <path d="M760-80q-50 0-85-35t-35-85q0-14 3-27t9-25L252-652q-12 6-25 9t-27 3q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 14-3 27t-9 25l400 400q12-6 25-9t27-3q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
</svg>`,
})
export class MsrfDiagonalLineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
