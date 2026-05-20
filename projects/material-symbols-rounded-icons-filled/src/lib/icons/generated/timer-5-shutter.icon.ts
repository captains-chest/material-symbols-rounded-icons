import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-timer-5-shutter-icon',
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
  <path d="M560-200H380q-25 0-42.5-17.5T320-260q0-25 17.5-42.5T380-320h180v-100H380q-25 0-42.5-17.5T320-480v-220q0-25 17.5-42.5T380-760h240q25 0 42.5 17.5T680-700q0 25-17.5 42.5T620-640H440v100h160q33 0 56.5 23.5T680-460v140q0 50-35 85t-85 35Z"/>
</svg>`,
})
export class MsrfTimer5ShutterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
