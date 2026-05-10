import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-location-automation-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M4 19V7l8-6 8 6v4h-2V8l-6-4.5L6 8v9h6v2Zm14.5 3-1.4-3.1-3.1-1.4 3.1-1.4 1.4-3.1 1.4 3.1 3.1 1.4-3.1 1.4Z"/>
</svg>`,
})
export class MsrfLocationAutomationIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
