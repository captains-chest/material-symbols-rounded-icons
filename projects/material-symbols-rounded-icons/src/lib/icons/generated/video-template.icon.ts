import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-video-template-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M200-40q-33 0-56.5-23.5T120-120v-40h80v40h560v-40h80v40q0 33-23.5 56.5T760-40H200Zm-40-200q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm-40-560v-40q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v40h-80v-40H200v40h-80Zm40 480h640v-320H160v320Zm320-160Zm-80 120 200-120-200-120v240Z"/>
</svg>`,
})
export class MsrVideoTemplateIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
