import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-business-center-icon',
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
  <path d="M440-360v-80h80v80h-80Zm-40-360h160v-80H400v80ZM160-120q-33 0-56.5-23.5T80-200v-160h280v40q0 17 11.5 28.5T400-280h160q17 0 28.5-11.5T600-320v-40h280v160q0 33-23.5 56.5T800-120H160ZM80-440v-200q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v200H600v-40q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480v40H80Z"/>
</svg>`,
})
export class MsrfBusinessCenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
