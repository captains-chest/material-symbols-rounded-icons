import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-sound-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v10q0 8-3 15.5t-9 13.5L511-565q-35 35-35 85t35 85l237 236q6 6 9 13.5t3 15.5v10q0 33-23.5 56.5T680-40H280Zm350-354q-14-7-20.5-21.5T612-447q5-8 6.5-16t1.5-17q0-9-1.5-17t-6.5-16q-9-17-2.5-31.5T630-566q14-7 29.5-3.5T685-547q8 16 11.5 33t3.5 34q0 17-3.5 34T685-413q-10 19-25.5 22.5T630-394Zm97 98q-13-8-18-22.5t6-27.5q23-29 34-62.5t11-71.5q0-38-11-71.5T715-614q-11-13-6-27.5t18-22.5q13-8 29.5-7t30.5 21q26 37 39.5 80.5T840-480q0 46-13.5 89.5T787-310q-14 20-30.5 21t-29.5-7ZM480-720q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
</svg>`,
})
export class MsrfMobileSoundIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
