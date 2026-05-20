import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-handheld-controller-icon',
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
  <path d="M440-240q-66 0-113-47t-47-113q-100 1-170-69.5T40-640q0-33 23.5-56.5T120-720h160v-40h-40q-17 0-28.5-11.5T200-800q0-17 11.5-28.5T240-840h160q17 0 28.5 11.5T440-800q0 17-11.5 28.5T400-760h-40v40h127q16 0 30.5 6t25.5 17l335 335q42 42 42 100t-42 100q-42 42-100 42t-100-42l-78-78H440Zm0-160h-81q0 33 23.5 56.5T440-320h80l-80-80Z"/>
</svg>`,
})
export class MsrfHandheldControllerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
