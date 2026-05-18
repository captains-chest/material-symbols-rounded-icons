import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-hls-icon',
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
  <path d="M120-390v-180q0-13 8.5-21.5T150-600q13 0 21.5 8.5T180-570v50h80v-50q0-13 8.5-21.5T290-600q13 0 21.5 8.5T320-570v180q0 13-8.5 21.5T290-360q-13 0-21.5-8.5T260-390v-70h-80v70q0 13-8.5 21.5T150-360q-13 0-21.5-8.5T120-390Zm280 0v-180q0-13 8.5-21.5T430-600q13 0 21.5 8.5T460-570v150h70q13 0 21.5 8.5T560-390q0 13-8.5 21.5T530-360H430q-13 0-21.5-8.5T400-390Zm260 30q-17 0-28.5-11.5T620-400v-20q0-8 6-14t14-6h20q8 0 14 6t6 14h80v-40H660q-17 0-28.5-11.5T620-500v-60q0-17 11.5-28.5T660-600h120q17 0 28.5 11.5T820-560v20q0 8-6 14t-14 6h-20q-8 0-14-6t-6-14h-80v40h100q17 0 28.5 11.5T820-460v60q0 17-11.5 28.5T780-360H660Z"/>
</svg>`,
})
export class MsrfHlsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
