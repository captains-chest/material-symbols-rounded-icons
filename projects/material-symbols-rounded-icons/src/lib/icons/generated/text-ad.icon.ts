import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-text-ad-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm80-40h480q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360H240q-17 0-28.5 11.5T200-320q0 17 11.5 28.5T240-280Zm0-160h480q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520H240q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm0-160h320q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H240q-17 0-28.5 11.5T200-640q0 17 11.5 28.5T240-600Z"/>
</svg>`,
})
export class MsrTextAdIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
