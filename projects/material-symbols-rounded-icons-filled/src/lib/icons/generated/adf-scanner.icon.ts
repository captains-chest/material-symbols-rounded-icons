import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-adf-scanner-icon',
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
  <path d="M80-240v-120q0-50 35-85t85-35h40v-240q0-33 23.5-56.5T320-800h320q33 0 56.5 23.5T720-720v240h40q50 0 85 35t35 85v120q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Zm240-240h320v-240H320v240Zm400 200q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Z"/>
</svg>`,
})
export class MsrfAdfScannerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
