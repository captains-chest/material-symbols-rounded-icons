import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-lte-mobiledata-icon',
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
  <path d="M160-360v-240q0-17 11.5-28.5T200-640q17 0 28.5 11.5T240-600v200h80q17 0 28.5 11.5T360-360q0 17-11.5 28.5T320-320H200q-17 0-28.5-11.5T160-360Zm280-200h-40q-17 0-28.5-11.5T360-600q0-17 11.5-28.5T400-640h160q17 0 28.5 11.5T600-600q0 17-11.5 28.5T560-560h-40v200q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-200Zm200 200v-240q0-17 11.5-28.5T680-640h120q17 0 28.5 11.5T840-600q0 17-11.5 28.5T800-560h-80v40h80q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440h-80v40h80q17 0 28.5 11.5T840-360q0 17-11.5 28.5T800-320H680q-17 0-28.5-11.5T640-360Z"/>
</svg>`,
})
export class MsrfLteMobiledataIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
