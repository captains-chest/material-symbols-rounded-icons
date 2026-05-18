import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-shop-two-icon',
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
  <path d="M120-80q-33 0-56.5-23.5T40-160v-400q0-17 11.5-28.5T80-600q17 0 28.5 11.5T120-560v400h640q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H120Zm160-160q-33 0-56.5-23.5T200-320v-400q0-17 11.5-28.5T240-760h160v-80q0-33 23.5-56.5T480-920h160q33 0 56.5 23.5T720-840v80h160q17 0 28.5 11.5T920-720v400q0 33-23.5 56.5T840-240H280Zm200-520h160v-80H480v80Zm0 369q0 12 10.5 17t20.5-1l162-103q9-6 9-17t-9-17L511-615q-10-6-20.5-1T480-599v208Z"/>
</svg>`,
})
export class MsrfShopTwoIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
