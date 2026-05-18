import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-wind-power-icon',
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
  <path d="M400-40q0-33 23.5-56.5T480-120v-229q9 4 19 6t21 2q42 0 70.5-28.5T619-440v-9l128 31q16 4 29 14t21 24l91 164q15 27 11 57t-26 52q-27 27-64.5 27T744-107L560-291v171q33 0 56.5 23.5T640-40H400Zm-240-80q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h120q17 0 28.5 11.5T320-160q0 17-11.5 28.5T280-120H160Zm126-170-180-51q-29-8-47.5-32.5T40-429q0-38 26.5-64.5T131-520h330q-19 14-29.5 34.5T421-440q0 23 9 42t25 33l-105 67q-14 8-30.5 10.5T286-290Zm234-90q-25 0-42.5-17.5T460-440q0-25 17.5-42.5T520-500q25 0 42.5 17.5T580-440q0 25-17.5 42.5T520-380Zm92-98q-11-27-35.5-44T520-539q-11 0-21 2t-19 6v-158q0-17 6.5-32t18.5-26l137-128q23-22 53.5-25t56.5 13q32 20 41.5 56.5T783-762L612-478ZM80-600q-17 0-28.5-11.5T40-640q0-17 11.5-28.5T80-680h120q17 0 28.5 11.5T240-640q0 17-11.5 28.5T200-600H80Zm120-160q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h160q17 0 28.5 11.5T400-800q0 17-11.5 28.5T360-760H200Z"/>
</svg>`,
})
export class MsrfWindPowerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
