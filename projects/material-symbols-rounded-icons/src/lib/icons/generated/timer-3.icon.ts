import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-timer-3-icon',
  standalone: true,
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M560-200H380q-25 0-42.5-17.5T320-260q0-25 17.5-42.5T380-320h180v-100H420q-25 0-42.5-17.5T360-480q0-25 17.5-42.5T420-540h140v-100H380q-25 0-42.5-17.5T320-700q0-25 17.5-42.5T380-760h180q50 0 85 35t35 85v76q0 35-24.5 59.5T596-480q35 0 59.5 24.5T680-396v76q0 50-35 85t-85 35Z"/>
</svg>`,
})
export class MsrTimer3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
