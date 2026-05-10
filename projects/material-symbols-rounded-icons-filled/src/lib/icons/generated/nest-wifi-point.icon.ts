import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-wifi-point-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M360-120q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70H360Zm0-80q0-17 11.5-28.5T400-240q17 0 28.5 11.5T440-200h80q0-17 11.5-28.5T560-240q17 0 28.5 11.5T600-200q45 0 81-22t57-58h-58q0 17-11.5 28.5T640-240q-17 0-28.5-11.5T600-280h-80q0 17-11.5 28.5T480-240q-17 0-28.5-11.5T440-280h-80q0 17-11.5 28.5T320-240q-17 0-28.5-11.5T280-280h-58q21 36 57 58t81 22Z"/>
</svg>`,
})
export class MsrfNestWifiPointIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
