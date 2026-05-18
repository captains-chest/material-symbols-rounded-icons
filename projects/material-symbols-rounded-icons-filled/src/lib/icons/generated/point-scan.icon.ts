import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-point-scan-icon',
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
  <path d="M480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm-40-280v-120q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v120q0 17-11.5 28.5T480-640q-17 0-28.5-11.5T440-680Zm0 520v-120q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v120q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Zm240-360h120q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H680q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520Zm-520 0h120q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520Z"/>
</svg>`,
})
export class MsrfPointScanIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
