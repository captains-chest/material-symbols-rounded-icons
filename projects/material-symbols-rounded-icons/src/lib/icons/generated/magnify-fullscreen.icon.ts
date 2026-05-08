import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-magnify-fullscreen-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm400-240v40q0 17 11.5 28.5T600-400q17 0 28.5-11.5T640-440v-40h40q17 0 28.5-11.5T720-520q0-17-11.5-28.5T680-560h-40v-40q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600v40h-40q-17 0-28.5 11.5T480-520q0 17 11.5 28.5T520-480h40Z"/>
</svg>`,
})
export class MsrMagnifyFullscreenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
