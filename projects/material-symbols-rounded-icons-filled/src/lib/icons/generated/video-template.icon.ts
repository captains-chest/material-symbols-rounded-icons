import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-video-template-icon',
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
  <path d="M200-40q-33 0-56.5-23.5T120-120v-40h720v40q0 33-23.5 56.5T760-40H200Zm-40-200q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm-40-560v-40q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v40H120Zm280 440 200-120-200-120v240Z"/>
</svg>`,
})
export class MsrfVideoTemplateIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
