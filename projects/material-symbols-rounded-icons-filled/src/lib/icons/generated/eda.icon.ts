import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-eda-icon',
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
  <path d="M280-40q-66 0-113-47t-47-113v-120h218l81 107q22 29 58 32t62-23l182-182 49-30q20-13 44-11t44 16q25 19 27 50t-20 53L632-75q-17 17-39 26t-46 9H280ZM120-400v-360q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v280h80v-360q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v360h80v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h80v-320q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v343L482-261l-80-107q-11-15-28-23.5t-36-8.5H120Z"/>
</svg>`,
})
export class MsrfEdaIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
