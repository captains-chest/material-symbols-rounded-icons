import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-timer-2-icon',
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
  <path d="M380-760h180q50 0 85 35t35 85v100q0 50-35 85t-85 35H440v100h180q25 0 42.5 17.5T680-260q0 25-17.5 42.5T620-200H380q-25 0-42.5-17.5T320-260v-160q0-50 35-85t85-35h120v-100H380q-25 0-42.5-17.5T320-700q0-25 17.5-42.5T380-760Z"/>
</svg>`,
})
export class MsrTimer2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
