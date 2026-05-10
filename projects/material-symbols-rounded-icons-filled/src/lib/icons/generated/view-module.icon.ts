import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-view-module-icon',
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
  <path d="M707-500q-33 0-56.5-23.5T627-580v-100q0-33 23.5-56.5T707-760h53q33 0 56.5 23.5T840-680v100q0 33-23.5 56.5T760-500h-53Zm-253 0q-33 0-56.5-23.5T374-580v-100q0-33 23.5-56.5T454-760h53q33 0 56.5 23.5T587-680v100q0 33-23.5 56.5T507-500h-53Zm-253 0q-33 0-56.5-23.5T121-580v-100q0-33 23.5-56.5T201-760h53q33 0 56.5 23.5T334-680v100q0 33-23.5 56.5T254-500h-53Zm0 300q-33 0-56.5-23.5T121-280v-100q0-33 23.5-56.5T201-460h53q33 0 56.5 23.5T334-380v100q0 33-23.5 56.5T254-200h-53Zm253 0q-33 0-56.5-23.5T374-280v-100q0-33 23.5-56.5T454-460h53q33 0 56.5 23.5T587-380v100q0 33-23.5 56.5T507-200h-53Zm253 0q-33 0-56.5-23.5T627-280v-100q0-33 23.5-56.5T707-460h53q33 0 56.5 23.5T840-380v100q0 33-23.5 56.5T760-200h-53Z"/>
</svg>`,
})
export class MsrfViewModuleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
