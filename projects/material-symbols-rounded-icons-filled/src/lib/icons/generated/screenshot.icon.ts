import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-screenshot-icon',
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
  <path d="M580-340v-70q0-13 8.5-21.5T610-440q13 0 21.5 8.5T640-410v90q0 17-11.5 28.5T600-280h-90q-13 0-21.5-8.5T480-310q0-13 8.5-21.5T510-340h70ZM380-620v70q0 13-8.5 21.5T350-520q-13 0-21.5-8.5T320-550v-90q0-17 11.5-28.5T360-680h90q13 0 21.5 8.5T480-650q0 13-8.5 21.5T450-620h-70ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z"/>
</svg>`,
})
export class MsrfScreenshotIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
