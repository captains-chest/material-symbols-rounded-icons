import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chromecast-2-icon',
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
  <path d="M360-120q-117 0-198.5-81.5T80-400q0-106 68.5-184.5T320-677v-55q0-62 43-105t105-43q34 0 64.5 15t51.5 41l207 261q12-5 25-2.5t22 13.5l61 77q11 13 8.5 29T892-419l-47 37q-13 11-29 9t-27-15l-60-77q-9-11-9-24.5t8-24.5L521-775q-10-12-23.5-18.5T468-800q-29 0-48.5 19.5T400-732v55q103 14 171.5 92.5T640-400q0 117-81.5 198.5T360-120Zm0-80q83 0 141.5-58.5T560-400q0-83-58.5-141.5T360-600q-83 0-141.5 58.5T160-400q0 83 58.5 141.5T360-200Z"/>
</svg>`,
})
export class MsrfChromecast2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
