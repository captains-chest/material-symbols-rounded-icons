import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-language-spanish-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M240-360h160q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H200q-17 0-28.5-11.5T160-320v-320q0-17 11.5-28.5T200-680h200q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H240v80h120q17 0 28.5 11.5T400-480q0 17-11.5 28.5T360-440H240v80Zm360 80q-33 0-56.5-23.5T520-360q0-17 11.5-28.5T560-400q17 0 28.5 11.5T600-360h120v-80H600q-33 0-56.5-23.5T520-520v-80q0-33 23.5-56.5T600-680h120q33 0 56.5 23.5T800-600q0 17-11.5 28.5T760-560q-17 0-28.5-11.5T720-600H600v80h120q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H600Z"/>
</svg>`,
})
export class MsrfLanguageSpanishIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
