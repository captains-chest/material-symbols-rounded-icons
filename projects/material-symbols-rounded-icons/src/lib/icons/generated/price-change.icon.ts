import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-price-change-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm240-160H280q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320h40q0 17 11.5 28.5T360-280q17 0 28.5-11.5T400-320h40q17 0 28.5-11.5T480-360v-120q0-17-11.5-28.5T440-520H320v-40h120q17 0 28.5-11.5T480-600q0-17-11.5-28.5T440-640h-40q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640h-40q-17 0-28.5 11.5T240-600v120q0 17 11.5 28.5T280-440h120v40Zm247 83 56-56q5-5 2.5-11t-9.5-6H584q-7 0-9.5 6t2.5 11l56 56q3 3 7 3t7-3Zm-63-243h112q7 0 9.5-6t-2.5-11l-56-56q-3-3-7-3t-7 3l-56 56q-5 5-2.5 11t9.5 6Z"/>
</svg>`,
})
export class MsrPriceChangeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
