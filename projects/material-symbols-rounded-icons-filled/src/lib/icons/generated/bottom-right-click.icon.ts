import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-bottom-right-click-icon',
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
  <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h600v-600q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800v600q0 33-23.5 56.5T760-120H160Zm440-160q-33 0-56.5-23.5T520-360q0-33 23.5-56.5T600-440q33 0 56.5 23.5T680-360q0 33-23.5 56.5T600-280ZM240-480q-17 0-28.5-11.5T200-520q0-17 11.5-28.5T240-560h104L148-755q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l195 196v-104q0-17 11.5-28.5T440-760q17 0 28.5 11.5T480-720v200q0 17-11.5 28.5T440-480H240Z"/>
</svg>`,
})
export class MsrfBottomRightClickIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
