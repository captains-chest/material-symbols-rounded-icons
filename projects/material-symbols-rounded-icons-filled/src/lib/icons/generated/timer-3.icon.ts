import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-timer-3-icon',
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
  <path d="M560-200H380q-25 0-42.5-17.5T320-260q0-25 17.5-42.5T380-320h180v-100H420q-25 0-42.5-17.5T360-480q0-25 17.5-42.5T420-540h140v-100H380q-25 0-42.5-17.5T320-700q0-25 17.5-42.5T380-760h180q50 0 85 35t35 85v76q0 35-24.5 59.5T596-480q35 0 59.5 24.5T680-396v76q0 50-35 85t-85 35Z"/>
</svg>`,
})
export class MsrfTimer3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
