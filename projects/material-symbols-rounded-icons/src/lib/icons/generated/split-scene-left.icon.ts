import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-split-scene-left-icon',
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
  <path d="M640-160q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h160v-480H640q-17 0-28.5-11.5T600-760q0-17 11.5-28.5T640-800h160q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H640ZM480-80q-17 0-28.5-11.5T440-120v-40H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h280v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v720q0 17-11.5 28.5T480-80Zm320-640v480-480Z"/>
</svg>`,
})
export class MsrSplitSceneLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
