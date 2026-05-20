import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-keyboard-onscreen-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M360-280h240q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360H360q-17 0-28.5 11.5T320-320q0 17 11.5 28.5T360-280ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-440h640v-120H160v120Zm80 200q17 0 28.5-11.5T280-440q0-17-11.5-28.5T240-480q-17 0-28.5 11.5T200-440q0 17 11.5 28.5T240-400Zm120 0q17 0 28.5-11.5T400-440q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400Zm120 0q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400Zm120 0q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480q-17 0-28.5 11.5T560-440q0 17 11.5 28.5T600-400Zm120 0q17 0 28.5-11.5T760-440q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440q0 17 11.5 28.5T720-400Z"/>
</svg>`,
})
export class MsrfKeyboardOnscreenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
