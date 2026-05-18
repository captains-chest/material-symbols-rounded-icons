import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-lightning-stand-icon',
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
  <path d="M440-600h-46q-11 0-17-10t0-20l124-217q4-7 11.5-5t7.5 10v162h46q11 0 17 10t0 20L459-433q-4 7-11.5 5t-7.5-10v-162Zm40 520q-137 0-208.5-35.5T200-220q0-29 13-53t39-41q-6 8-9.5 19.5T239-269q0 38 27.5 60t66 33q38.5 11 79.5 13.5t68 2.5q27 0 68-2.5t79.5-13.5q38.5-11 66-33t27.5-60q0-14-3.5-25.5T708-314q26 17 39 41t13 53q0 69-71.5 104.5T480-80Zm0-120q-92 0-146-21.5T280-280q0-35 55.5-57.5T480-360q92 0 146 21.5t54 58.5q0 37-54 58.5T480-200Z"/>
</svg>`,
})
export class MsrfLightningStandIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
