import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-blinds-closed-icon',
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
  <path d="M160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H670q0 29-20.5 49.5T600-50q-29 0-49.5-20.5T530-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40Zm80-480h320v-80H240v80Zm400 0h80v-80h-80v80ZM240-520h320v-80H240v80Zm400 0h80v-80h-80v80ZM240-360h320v-80H240v80Zm400 0h80v-80h-80v80ZM240-200h320v-80H240v80Zm400 0h80v-80h-80v80Z"/>
</svg>`,
})
export class MsrBlindsClosedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
