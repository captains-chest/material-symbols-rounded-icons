import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-page-header-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-760q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Zm600 80q33 0 56.5 23.5T840-600v400q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-400q0-33 23.5-56.5T200-680h560Zm0 80H200v400h560v-400Zm-560 0v400-400Z"/>
</svg>`,
})
export class MsrPageHeaderIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
