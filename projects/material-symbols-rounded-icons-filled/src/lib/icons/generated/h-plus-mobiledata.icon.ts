import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-h-plus-mobiledata-icon',
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
  <path d="M240-440v120q0 17-11.5 28.5T200-280q-17 0-28.5-11.5T160-320v-320q0-17 11.5-28.5T200-680q17 0 28.5 11.5T240-640v120h240v-120q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v320q0 17-11.5 28.5T520-280q-17 0-28.5-11.5T480-320v-120H240Zm480 0h-40q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520h40v-40q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v40h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v40q0 17-11.5 28.5T760-360q-17 0-28.5-11.5T720-400v-40Z"/>
</svg>`,
})
export class MsrfHPlusMobiledataIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
