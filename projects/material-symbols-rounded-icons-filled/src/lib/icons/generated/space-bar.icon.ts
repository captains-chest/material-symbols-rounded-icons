import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-space-bar-icon',
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
  <path d="M240-360q-33 0-56.5-23.5T160-440v-120q0-17 11.5-28.5T200-600q17 0 28.5 11.5T240-560v120h480v-120q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v120q0 33-23.5 56.5T720-360H240Z"/>
</svg>`,
})
export class MsrfSpaceBarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
