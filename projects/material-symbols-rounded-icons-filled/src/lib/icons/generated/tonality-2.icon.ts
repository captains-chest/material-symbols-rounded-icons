import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tonality-2-icon',
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
  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-680v-38q-30 5-59 13.5T326-760h114Zm0 120v-40H230q-8 9-14 19t-12 21h236Zm0 120v-40H170l-4 20-4 20h278Zm0 120v-40H162l4 20 4 20h270Zm0 120v-40H204q6 11 12 21t14 19h210Zm0 118v-38H326q26 16 55 24.5t59 13.5Z"/>
</svg>`,
})
export class MsrfTonality2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
