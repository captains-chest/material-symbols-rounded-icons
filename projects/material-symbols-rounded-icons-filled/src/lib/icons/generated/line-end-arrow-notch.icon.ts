import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-line-end-arrow-notch-icon',
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
  <path d="M508-243q-14 8-25-2.5t-3-24.5l97-170H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h457l-97-170q-8-14 3-24.5t25-2.5l319 203q19 12 19 34t-19 34L508-243Z"/>
</svg>`,
})
export class MsrfLineEndArrowNotchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
