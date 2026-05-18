import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-shield-toggle-icon',
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
  <path d="M400-520h160q33 0 56.5-23.5T640-600q0-33-23.5-56.5T560-680H400q-33 0-56.5 23.5T320-600q0 33 23.5 56.5T400-520Zm160-40q-17 0-28.5-11.5T520-600q0-17 11.5-28.5T560-640q17 0 28.5 11.5T600-600q0 17-11.5 28.5T560-560ZM400-320h160q33 0 56.5-23.5T640-400q0-33-23.5-56.5T560-480H400q-33 0-56.5 23.5T320-400q0 33 23.5 56.5T400-320Zm0-40q-17 0-28.5-11.5T360-400q0-17 11.5-28.5T400-440q17 0 28.5 11.5T440-400q0 17-11.5 28.5T400-360Zm80 276q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"/>
</svg>`,
})
export class MsrfShieldToggleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
