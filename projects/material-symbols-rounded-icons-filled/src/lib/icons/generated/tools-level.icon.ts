import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tools-level-icon',
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
  <path d="M160-280q-33 0-56.5-23.5T80-360v-240q0-33 23.5-56.5T160-680h640q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H160Zm220-200h60v-120h-60q-24 0-42 18t-18 42q0 24 18 42t42 18Zm140 0h60q24 0 42-18t18-42q0-24-18-42t-42-18h-60v120Z"/>
</svg>`,
})
export class MsrfToolsLevelIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
