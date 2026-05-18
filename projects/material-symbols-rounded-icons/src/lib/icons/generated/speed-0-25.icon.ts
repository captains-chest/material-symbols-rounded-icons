import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-speed-0-25-icon',
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
  <path d="M600-280q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h120v-80H600q-17 0-28.5-11.5T560-480v-160q0-17 11.5-28.5T600-680h160q17 0 28.5 11.5T800-640q0 17-11.5 28.5T760-600H640v80h80q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H600Zm-120 0H320q-17 0-28.5-11.5T280-320v-120q0-33 23.5-56.5T360-520h80v-80H320q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h120q33 0 56.5 23.5T520-600v80q0 33-23.5 56.5T440-440h-80v80h120q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm-280 0q-17 0-28.5-11.5T160-320q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280Z"/>
</svg>`,
})
export class MsrSpeed025IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
