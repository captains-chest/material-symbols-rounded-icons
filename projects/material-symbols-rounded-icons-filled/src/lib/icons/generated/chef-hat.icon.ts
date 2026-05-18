import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chef-hat-icon',
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
  <path d="M400-400q17 0 28.5-11.5T440-440v-120q0-17-11.5-28.5T400-600q-17 0-28.5 11.5T360-560v120q0 17 11.5 28.5T400-400Zm-200 80v-140q-46-23-73-66.5T100-621q0-75 51.5-127T278-800q12 0 24.5 2t24.5 5q25-41 65-64t88-23q48 0 88 23t65 64q12-3 24-5t25-2q75 0 126.5 52T860-621q0 51-27 94.5T760-460v140H200Zm360-80q17 0 28.5-11.5T600-440v-120q0-17-11.5-28.5T560-600q-17 0-28.5 11.5T520-560v120q0 17 11.5 28.5T560-400ZM280-80q-33 0-56.5-23.5T200-160v-80h560v80q0 33-23.5 56.5T680-80H280Z"/>
</svg>`,
})
export class MsrfChefHatIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
