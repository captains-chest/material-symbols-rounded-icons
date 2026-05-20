import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-screenshot-tablet-icon',
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
  <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm120-80h480v-480H240v480Zm380-100h-70q-13 0-21.5 8.5T520-310q0 13 8.5 21.5T550-280h100q13 0 21.5-8.5T680-310v-100q0-13-8.5-21.5T650-440q-13 0-21.5 8.5T620-410v70ZM340-620h70q13 0 21.5-8.5T440-650q0-13-8.5-21.5T410-680H310q-13 0-21.5 8.5T280-650v100q0 13 8.5 21.5T310-520q13 0 21.5-8.5T340-550v-70Z"/>
</svg>`,
})
export class MsrfScreenshotTabletIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
