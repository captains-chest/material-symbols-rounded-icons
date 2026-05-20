import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-currency-bitcoin-icon',
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
  <path d="M360-160v-40h-80q-17 0-28.5-11.5T240-240q0-17 11.5-28.5T280-280h40v-400h-40q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h80v-40q0-17 11.5-28.5T400-840q17 0 28.5 11.5T440-800v40h80v-40q0-17 11.5-28.5T560-840q17 0 28.5 11.5T600-800v45q52 14 86 56.5t34 98.5q0 29-10 55.5T682-497q35 21 56.5 57t21.5 80q0 66-47 113t-113 47v40q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160v-40h-80v40q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160Zm40-360h160q33 0 56.5-23.5T640-600q0-33-23.5-56.5T560-680H400v160Zm0 240h200q33 0 56.5-23.5T680-360q0-33-23.5-56.5T600-440H400v160Z"/>
</svg>`,
})
export class MsrfCurrencyBitcoinIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
