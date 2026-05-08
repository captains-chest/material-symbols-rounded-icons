import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-battery-android-alert-icon',
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
  <path d="M440-330q17 0 28.5-11.5T480-370q0-17-11.5-28.5T440-410q-17 0-28.5 11.5T400-370q0 17 11.5 28.5T440-330Zm0-300q-17 0-28.5 11.5T400-590v80q0 17 11.5 28.5T440-470q17 0 28.5-11.5T480-510v-80q0-17-11.5-28.5T440-630ZM160-290h560v-380H160v380Zm0 80q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Zm0-80v-380 380Z"/>
</svg>`,
})
export class MsrBatteryAndroidAlertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
