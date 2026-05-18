import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-payment-card-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm80-40h295q23 0 34.5-19t1.5-39L411-658q-5-11-15-16.5t-21-5.5H240q-17 0-28.5 11.5T200-640v320q0 17 11.5 28.5T240-280Zm320-320h160q17 0 28.5-11.5T760-640q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640q0 17 11.5 28.5T560-600ZM160-240v-480 480Z"/>
</svg>`,
})
export class MsrPaymentCardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
