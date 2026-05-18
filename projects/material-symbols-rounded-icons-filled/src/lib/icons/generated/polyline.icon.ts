import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-polyline-icon',
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
  <path d="M600-160v-20L320-320H200q-33 0-56.5-23.5T120-400v-80q0-33 23.5-56.5T200-560h92l108-124v-116q0-33 23.5-56.5T480-880h80q33 0 56.5 23.5T640-800v80q0 33-23.5 56.5T560-640h-92L360-516v126l245 122q8-23 28.5-37.5T680-320h80q33 0 56.5 23.5T840-240v80q0 33-23.5 56.5T760-80h-80q-33 0-56.5-23.5T600-160Z"/>
</svg>`,
})
export class MsrfPolylineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
