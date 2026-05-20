import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-exposure-neg-1-icon',
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
  <path d="M360-400H160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h200q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm270-238-57 41q-14 11-31.5 7.5T514-608q-9-14-6-30.5t17-26.5l123-89q4-3 8.5-4.5t9.5-1.5h22q14 0 23 9t9 23v483q0 19-13 32t-32 13q-19 0-32-13t-13-32v-393Z"/>
</svg>`,
})
export class MsrfExposureNeg1IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
