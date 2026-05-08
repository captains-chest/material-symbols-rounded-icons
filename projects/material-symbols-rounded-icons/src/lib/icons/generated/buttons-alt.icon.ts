import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-buttons-alt-icon',
  standalone: true,
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
  <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm130-130v60q0 13 8.5 21.5T320-360q13 0 21.5-8.5T350-390v-60h60q13 0 21.5-8.5T440-480q0-13-8.5-21.5T410-510h-60v-60q0-13-8.5-21.5T320-600q-13 0-21.5 8.5T290-570v60h-60q-13 0-21.5 8.5T200-480q0 13 8.5 21.5T230-450h60ZM160-320v-320 320Z"/>
</svg>`,
})
export class MsrButtonsAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
