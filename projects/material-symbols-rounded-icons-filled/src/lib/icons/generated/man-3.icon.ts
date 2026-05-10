import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-man-3-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M400-110v-240h-40q-17 0-28.5-11.5T320-390v-200q0-33 23.5-56.5T400-670h160q33 0 56.5 23.5T640-590v200q0 17-11.5 28.5T600-350h-40v240q0 17-11.5 28.5T520-70h-80q-17 0-28.5-11.5T400-110Zm52-618-34-34q-12-12-12-28t12-28l34-34q12-12 28-12t28 12l34 34q12 12 12 28t-12 28l-34 34q-12 12-28 12t-28-12Z"/>
</svg>`,
})
export class MsrfMan3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
