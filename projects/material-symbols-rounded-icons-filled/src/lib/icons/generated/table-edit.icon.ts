import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-table-edit-icon',
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
  <path d="M120-400v-200h320v200H120Zm0-280v-80q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80H120ZM560-80q-17 0-28.5-11.5T520-120v-50q0-16 6.5-30.5T544-226l197-197q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-300L666-103q-11 11-25.5 17T610-80h-50Zm223-224 37-39-37-37-38 38 38 38ZM200-120q-33 0-56.5-23.5T120-200v-120h320v200H200Zm320-280v-200h320v92q-38-17-81-10t-75 39l-79 79h-85Z"/>
</svg>`,
})
export class MsrfTableEditIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
