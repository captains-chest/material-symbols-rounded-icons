import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-double-arrow-icon',
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
  <path d="M442-480 287-697q-14-20-3.5-41.5T319-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Zm238 0L525-697q-14-20-3.5-41.5T557-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Z"/>
</svg>`,
})
export class MsrfDoubleArrowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
