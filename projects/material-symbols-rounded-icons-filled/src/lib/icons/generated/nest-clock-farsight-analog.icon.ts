import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-clock-farsight-analog-icon',
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
  <path d="M520-473v-127q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v143q0 8 3 15.5t9 13.5l101 101q12 12 28.5 12t28.5-12q11-12 11-28.5T610-383l-90-90Zm-40-247q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Zm240 240q0 17 11.5 28.5T760-440q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520q-17 0-28.5 11.5T720-480ZM480-240q-17 0-28.5 11.5T440-200q0 17 11.5 28.5T480-160q17 0 28.5-11.5T520-200q0-17-11.5-28.5T480-240ZM240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440q17 0 28.5-11.5T240-480ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
</svg>`,
})
export class MsrfNestClockFarsightAnalogIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
