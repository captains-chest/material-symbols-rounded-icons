import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-luggage-icon',
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
  <path d="M280-120q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h80v-80q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v80h80q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120Zm120-480q-17 0-28.5 11.5T360-560v280q0 17 11.5 28.5T400-240q17 0 28.5-11.5T440-280v-280q0-17-11.5-28.5T400-600Zm160 0q-17 0-28.5 11.5T520-560v280q0 17 11.5 28.5T560-240q17 0 28.5-11.5T600-280v-280q0-17-11.5-28.5T560-600ZM440-720h80v-80h-80v80Z"/>
</svg>`,
})
export class MsrfLuggageIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
