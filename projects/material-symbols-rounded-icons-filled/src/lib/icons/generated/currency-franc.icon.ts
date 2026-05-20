import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-currency-franc-icon',
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
  <path d="M280-160v-80h-40q-17 0-28.5-11.5T200-280q0-17 11.5-28.5T240-320h40v-480q0-17 11.5-28.5T320-840h360q17 0 28.5 11.5T720-800q0 17-11.5 28.5T680-760H360v240h280q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440H360v120h120q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240H360v80q0 17-11.5 28.5T320-120q-17 0-28.5-11.5T280-160Z"/>
</svg>`,
})
export class MsrfCurrencyFrancIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
