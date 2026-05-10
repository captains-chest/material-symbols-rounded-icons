import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-space-dashboard-2-icon',
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
  <path d="M840-120v-720 720Zm-640 0h240q33 0 56.5-23.5T520-200v-560q0-33-23.5-56.5T440-840H200q-33 0-56.5 23.5T120-760v560q0 33 23.5 56.5T200-120Zm480 0h80q33 0 56.5-23.5T840-200v-160q0-33-23.5-56.5T760-440h-80q-33 0-56.5 23.5T600-360v160q0 33 23.5 56.5T680-120Zm0-400h80q33 0 56.5-23.5T840-600v-160q0-33-23.5-56.5T760-840h-80q-33 0-56.5 23.5T600-760v160q0 33 23.5 56.5T680-520Z"/>
</svg>`,
})
export class MsrfSpaceDashboard2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
