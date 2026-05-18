import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-battery-android-frame-plus-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M160-240q-51 0-85.5-34.5T40-360v-240q0-50 34.5-85t85.5-35h440q17 0 28.5 11.5T640-680q0 17-11.5 28.5T600-640H160q-17 0-28.5 11.5T120-600v240q0 17 11.5 28.5T160-320h440q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240H160Zm0-160v-160q0-17 11.5-28.5T200-600h280q17 0 28.5 11.5T520-560v160q0 17-11.5 28.5T480-360H200q-17 0-28.5-11.5T160-400Zm560-40h-80q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520h80v-80q0-17 11.5-28.5T760-640q17 0 28.5 11.5T800-600v80h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80v80q0 17-11.5 28.5T760-320q-17 0-28.5-11.5T720-360v-80Z"/>
</svg>`,
})
export class MsrfBatteryAndroidFramePlusIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
