import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-battery-charging-full-2-icon',
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
  <path d="M120-280q-17 0-28.5-11.5T80-320v-320q0-17 11.5-28.5T120-680h458q17 0 28.5 11.5T618-640L493-485q-30 38-9.5 81.5T553-360q17 0 28.5 11.5T593-320q0 17-11.5 28.5T553-280H120Zm575-160h-93q-13 0-18.5-11t2.5-21l144-181q5-6 11.5-7t12.5 1q6 2 10 8t2 14l-21 117h93q13 0 18.5 11t-2.5 21L710-307q-5 6-11.5 7t-12.5-1q-6-2-10-8t-2-14l21-117Z"/>
</svg>`,
})
export class MsrfBatteryChargingFull2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
