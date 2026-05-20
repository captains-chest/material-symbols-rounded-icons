import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-farsight-seasonal-icon',
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
  <path d="M480-675q-18-13-38.5-19t-41.5-6q-27 0-53 10.5T301-659q-20 20-30.5 46T260-560q0 21 6 41.5t19 38.5q-13 18-19 38.5t-6 41.5q0 27 10.5 53t30.5 46q20 20 46 30.5t53 10.5q21 0 41.5-6t38.5-19q18 13 38.5 19t41.5 6q27 0 53-10.5t46-30.5q20-20 30.5-46t10.5-53q0-21-6-41.5T675-480q13-18 19-38.5t6-41.5q0-27-10.5-53T659-659q-20-20-46-30.5T560-700q-21 0-41.5 6T480-675Zm0 195Zm0 50q21 0 35.5-14.5T530-480q0-21-14.5-35.5T480-530q-21 0-35.5 14.5T430-480q0 21 14.5 35.5T480-430Zm0 350q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
</svg>`,
})
export class MsrfNestFarsightSeasonalIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
