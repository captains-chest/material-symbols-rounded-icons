import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-floor-lamp-icon',
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
  <path d="M480-200q-17 0-28.5-11.5T440-240v-280H240q-20 0-32-16t-6-36l78-252q8-25 29-40.5t47-15.5h248q26 0 47 15.5t29 40.5l78 252q6 20-6 36t-32 16H520v280q0 17-11.5 28.5T480-200ZM294-600h372l-62-200H356l-62 200Zm66 520q-17 0-28.5-11.5T320-120q0-17 11.5-28.5T360-160h240q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H360Zm120-620Z"/>
</svg>`,
})
export class MsrFloorLampIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
