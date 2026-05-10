import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-unfold-less-icon',
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
  <path d="m480-284-96 96q-11 11-28 11t-28-11q-11-11-11-28t11-28l124-124q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l124 124q11 11 11 28t-11 28q-11 11-28 11t-28-11l-96-96Zm0-392 96-96q11-11 28-11t28 11q11 11 11 28t-11 28L508-592q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L328-716q-11-11-11-28t11-28q11-11 28-11t28 11l96 96Z"/>
</svg>`,
})
export class MsrfUnfoldLessIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
