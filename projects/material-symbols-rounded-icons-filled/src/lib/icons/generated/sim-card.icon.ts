import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-sim-card-icon',
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
  <path d="M320-200q17 0 28.5-11.5T360-240q0-17-11.5-28.5T320-280q-17 0-28.5 11.5T280-240q0 17 11.5 28.5T320-200Zm0-160q17 0 28.5-11.5T360-400v-80q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480v80q0 17 11.5 28.5T320-360Zm160 160q17 0 28.5-11.5T520-240v-80q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320v80q0 17 11.5 28.5T480-200Zm0-240q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm160 240q17 0 28.5-11.5T680-240q0-17-11.5-28.5T640-280q-17 0-28.5 11.5T600-240q0 17 11.5 28.5T640-200Zm0-160q17 0 28.5-11.5T680-400v-80q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480v80q0 17 11.5 28.5T640-360ZM240-80q-33 0-56.5-23.5T160-160v-447q0-16 6-30.5t17-25.5l194-194q11-11 25.5-17t30.5-6h287q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Z"/>
</svg>`,
})
export class MsrfSimCardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
