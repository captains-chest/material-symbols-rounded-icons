import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-corporate-fare-icon',
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
  <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v80h320q33 0 56.5 23.5T880-600v400q0 33-23.5 56.5T800-120H160Zm0-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm120-240q-17 0-28.5-11.5T560-480q0-17 11.5-28.5T600-520h80q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440h-80Zm0 160q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h80q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280h-80Z"/>
</svg>`,
})
export class MsrfCorporateFareIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
