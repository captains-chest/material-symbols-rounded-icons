import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-space-dashboard-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm400 0q-33 0-56.5-23.5T520-200v-200q0-33 23.5-56.5T600-480h160q33 0 56.5 23.5T840-400v200q0 33-23.5 56.5T760-120H600Zm0-440q-33 0-56.5-23.5T520-640v-120q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v120q0 33-23.5 56.5T760-560H600Z"/>
</svg>`,
})
export class MsrfSpaceDashboardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
