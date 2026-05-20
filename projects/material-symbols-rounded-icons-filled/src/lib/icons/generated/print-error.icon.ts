import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-print-error-icon',
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
  <path d="M80-520q0-51 35-85.5t85-34.5h560q38 0 70 14t32 47q0 8-6 13.5t-14 5.5H720q-33 0-56.5 23.5T640-480v80q0 17-11.5 28.5T600-360H320v160h280q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H320q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160Zm680 400q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120Zm-40-200v-120q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v120q0 17-11.5 28.5T760-280q-17 0-28.5-11.5T720-320ZM280-680q-17 0-28.5-11.5T240-720v-40q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v40q0 17-11.5 28.5T680-680H280Z"/>
</svg>`,
})
export class MsrfPrintErrorIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
