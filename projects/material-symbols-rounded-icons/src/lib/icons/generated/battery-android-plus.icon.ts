import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-battery-android-plus-icon',
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
  <path d="M400-440v60q0 17 11.5 28.5T440-340q17 0 28.5-11.5T480-380v-60h60q17 0 28.5-11.5T580-480q0-17-11.5-28.5T540-520h-60v-60q0-17-11.5-28.5T440-620q-17 0-28.5 11.5T400-580v60h-60q-17 0-28.5 11.5T300-480q0 17 11.5 28.5T340-440h60ZM160-290h560v-380H160v380Zm0 80q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Zm0-80v-380 380Z"/>
</svg>`,
})
export class MsrBatteryAndroidPlusIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
