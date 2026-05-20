import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-keyboard-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm200-40h240q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320Zm-200 40v-400 400Zm80-280q17 0 28.5-11.5T280-600q0-17-11.5-28.5T240-640q-17 0-28.5 11.5T200-600q0 17 11.5 28.5T240-560Zm120 0q17 0 28.5-11.5T400-600q0-17-11.5-28.5T360-640q-17 0-28.5 11.5T320-600q0 17 11.5 28.5T360-560Zm120 0q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm120 0q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560Zm120 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm120 0q17 0 28.5-11.5T400-480q0-17-11.5-28.5T360-520q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440Zm120 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm120 0q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520q-17 0-28.5 11.5T560-480q0 17 11.5 28.5T600-440Zm120 0q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520q-17 0-28.5 11.5T680-480q0 17 11.5 28.5T720-440Z"/>
</svg>`,
})
export class MsrKeyboardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
