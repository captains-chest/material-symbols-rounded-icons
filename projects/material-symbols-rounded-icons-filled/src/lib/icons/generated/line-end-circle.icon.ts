import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-line-end-circle-icon',
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
  <path d="M640-240q-90 0-156.5-57T403-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h283q14-86 80.5-143T640-720q100 0 170 70t70 170q0 100-70 170t-170 70Z"/>
</svg>`,
})
export class MsrfLineEndCircleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
