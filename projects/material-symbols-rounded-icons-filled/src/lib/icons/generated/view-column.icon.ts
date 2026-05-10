import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-view-column-icon',
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
  <path d="M200-200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h53q33 0 56.5 23.5T333-680v400q0 33-23.5 56.5T253-200h-53Zm253 0q-33 0-56.5-23.5T373-280v-400q0-33 23.5-56.5T453-760h53q33 0 56.5 23.5T586-680v400q0 33-23.5 56.5T506-200h-53Zm253 0q-33 0-56.5-23.5T626-280v-400q0-33 23.5-56.5T706-760h53q33 0 56.5 23.5T839-680v400q0 33-23.5 56.5T759-200h-53Z"/>
</svg>`,
})
export class MsrfViewColumnIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
