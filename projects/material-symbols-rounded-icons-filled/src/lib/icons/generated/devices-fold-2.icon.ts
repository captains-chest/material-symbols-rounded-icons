import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-devices-fold-2-icon',
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
  <path d="M680-120H280q-33 0-56.5-23.5T200-200v-560q0-33 23.5-56.5T280-840h424q25 0 45 13.5t29 36.5l96 240q16 40-7.5 75T800-440h-40v240q0 33-23.5 56.5T680-120Zm0-80v-240H376q-25 0-45-13.5T302-490l-22-55v345h400Z"/>
</svg>`,
})
export class MsrfDevicesFold2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
