import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-airline-seat-legroom-normal-icon',
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
  <path d="M640-400H320q-33 0-56.5-23.5T240-480v-320q0-17 11.5-28.5T280-840h160q17 0 28.5 11.5T480-800v200h200q33 0 56.5 23.5T760-520v280h60q26 0 43 17t17 43q0 26-17 43t-43 17H680q-17 0-28.5-11.5T640-160v-240ZM520-280H200q-33 0-56.5-23.5T120-360v-440q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800v440h320q17 0 28.5 11.5T560-320q0 17-11.5 28.5T520-280Z"/>
</svg>`,
})
export class MsrfAirlineSeatLegroomNormalIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
