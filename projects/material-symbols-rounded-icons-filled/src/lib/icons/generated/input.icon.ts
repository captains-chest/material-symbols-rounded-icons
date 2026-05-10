import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-input-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-80q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v80h640v-480H160v80q0 17-11.5 28.5T120-600q-17 0-28.5-11.5T80-640v-80q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm327-280H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h367l-55-54q-12-11-11.5-27.5T432-630q12-12 28.5-12.5T489-631l123 123q12 12 12 28t-12 28L489-329q-12 12-28.5 12T432-329q-11-12-11.5-28.5T432-386l55-54Z"/>
</svg>`,
})
export class MsrfInputIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
