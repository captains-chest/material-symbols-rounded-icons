import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-g-mobiledata-icon',
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
  <path d="M360-280q-33 0-56.5-23.5T280-360v-240q0-33 23.5-56.5T360-680h240q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H360v240h200v-80h-40q-17 0-28.5-11.5T480-480q0-17 11.5-28.5T520-520h80q17 0 28.5 11.5T640-480v120q0 33-23.5 56.5T560-280H360Z"/>
</svg>`,
})
export class MsrfGMobiledataIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
