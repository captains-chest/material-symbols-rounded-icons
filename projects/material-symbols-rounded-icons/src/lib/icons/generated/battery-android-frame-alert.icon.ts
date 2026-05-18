import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-battery-android-frame-alert-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M160-240q-50 0-85-35t-35-85v-240q0-50 35-85t85-35h520q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640H160q-17 0-28.5 11.5T120-600v240q0 17 11.5 28.5T160-320h520q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240H160Zm0-160v-160q0-17 11.5-28.5T200-600h480q17 0 28.5 11.5T720-560v160q0 17-11.5 28.5T680-360H200q-17 0-28.5-11.5T160-400Zm680 100q-17 0-28.5-11.5T800-340q0-17 11.5-28.5T840-380q17 0 28.5 11.5T880-340q0 17-11.5 28.5T840-300Zm0-140q-17 0-28.5-11.5T800-480v-160q0-17 11.5-28.5T840-680q17 0 28.5 11.5T880-640v160q0 17-11.5 28.5T840-440Z"/>
</svg>`,
})
export class MsrBatteryAndroidFrameAlertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
