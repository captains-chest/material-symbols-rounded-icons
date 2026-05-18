import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-clinical-notes-icon',
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
  <path d="M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM360-156v36H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q-31-39-70-59.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600h240q-20 16-36 36t-27 44H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440h160q0 21 4.5 41t12.5 39H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280h98q-27 23-42.5 55.5T360-156ZM480-40q-17 0-28.5-11.5T440-80v-76q0-21 10-39.5t28-29.5q32-19 54-26.5t59-13.5q12-2 24 .5t20 11.5l45 53 44-53q8-10 20-12t24 0q37 6 59 13.5t54 26.5q18 11 28.5 29.5T920-156v76q0 17-11.5 28.5T880-40H480Z"/>
</svg>`,
})
export class MsrfClinicalNotesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
