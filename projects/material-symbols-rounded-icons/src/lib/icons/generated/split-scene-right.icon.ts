import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-split-scene-right-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h160q17 0 28.5 11.5T360-760q0 17-11.5 28.5T320-720H160v480h160q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160H160Zm320 80q-17 0-28.5-11.5T440-120v-720q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40h280q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H520v40q0 17-11.5 28.5T480-80ZM160-240v-480 480Z"/>
</svg>`,
})
export class MsrSplitSceneRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
