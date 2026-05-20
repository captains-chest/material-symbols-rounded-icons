import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrow-shape-up-stack-2-icon',
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
  <path d="M360-80v-80H227q-20 0-28-18t5-32l246-276q12-14 30-14t30 14l246 276q13 14 5 32t-28 18H600v80q0 17-11.5 28.5T560-40H400q-17 0-28.5-11.5T360-80Zm120-520L279-373q-6 6-14 9.5t-16 3.5q-26 0-36.5-23t6.5-43l231-260q12-14 30-14t30 14l231 260q17 20 6.5 43T711-360q-8 0-16-3t-14-10L480-600Zm0-200L279-573q-6 6-14 9.5t-16 3.5q-26 0-36.5-23t6.5-43l231-260q12-14 30-14t30 14l231 260q17 20 6.5 43T711-560q-8 0-16-3t-14-10L480-800Z"/>
</svg>`,
})
export class MsrfArrowShapeUpStack2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
