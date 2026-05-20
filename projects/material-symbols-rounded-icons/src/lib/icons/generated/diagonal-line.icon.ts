import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-diagonal-line-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M760-80q-50 0-85-35t-35-85q0-14 3-27t9-25L252-652q-12 6-25 9t-27 3q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 14-3 27t-9 25l400 400q12-6 25-9t27-3q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
</svg>`,
})
export class MsrDiagonalLineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
