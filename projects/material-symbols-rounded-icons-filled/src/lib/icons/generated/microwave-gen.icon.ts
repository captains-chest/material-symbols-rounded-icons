import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-microwave-gen-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm80-120h320q17 0 28.5-11.5T600-320v-320q0-17-11.5-28.5T560-680H240q-17 0-28.5 11.5T200-640v320q0 17 11.5 28.5T240-280Zm480 0q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Zm-440-80v-240h240v240H280Zm440-80q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520q-17 0-28.5 11.5T680-480q0 17 11.5 28.5T720-440Zm0-160q17 0 28.5-11.5T760-640q0-17-11.5-28.5T720-680q-17 0-28.5 11.5T680-640q0 17 11.5 28.5T720-600Z"/>
</svg>`,
})
export class MsrfMicrowaveGenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
