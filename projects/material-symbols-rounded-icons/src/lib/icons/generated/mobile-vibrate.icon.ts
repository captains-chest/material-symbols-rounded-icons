import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mobile-vibrate-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M320-120q-33 0-56.5-23.5T240-200v-560q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v560q0 33-23.5 56.5T640-120H320Zm320-80v-560H320v560h320ZM480-640q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720q-17 0-28.5 11.5T440-680q0 17 11.5 28.5T480-640ZM0-400v-160q0-17 11.5-28.5T40-600q17 0 28.5 11.5T80-560v160q0 17-11.5 28.5T40-360q-17 0-28.5-11.5T0-400Zm120 80v-320q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v320q0 17-11.5 28.5T160-280q-17 0-28.5-11.5T120-320Zm760-80v-160q0-17 11.5-28.5T920-600q17 0 28.5 11.5T960-560v160q0 17-11.5 28.5T920-360q-17 0-28.5-11.5T880-400Zm-120 80v-320q0-17 11.5-28.5T800-680q17 0 28.5 11.5T840-640v320q0 17-11.5 28.5T800-280q-17 0-28.5-11.5T760-320ZM320-200v-560 560Z"/>
</svg>`,
})
export class MsrMobileVibrateIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
