import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-collapse-all-icon',
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
  <path d="M480-264 324-108q-11 11-28 11t-28-11q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-264Zm0-432 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L537-641q-23 23-57 23t-57-23L268-796q-11-11-11-28t11-28q11-11 28-11t28 11l156 156Z"/>
</svg>`,
})
export class MsrfCollapseAllIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
