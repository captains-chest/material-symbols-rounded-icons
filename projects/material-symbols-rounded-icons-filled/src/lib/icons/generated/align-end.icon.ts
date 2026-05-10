import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-align-end-icon',
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
  <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm200-440q-17 0-28.5-11.5T280-560v-40q0-17 11.5-28.5T320-640h320q17 0 28.5 11.5T680-600v40q0 17-11.5 28.5T640-520H320Zm0 240q-17 0-28.5-11.5T280-320v-40q0-17 11.5-28.5T320-400h320q17 0 28.5 11.5T680-360v40q0 17-11.5 28.5T640-280H320Z"/>
</svg>`,
})
export class MsrfAlignEndIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
