import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stat-3-icon',
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
  <path d="M480-288 324-133q-11 11-27.5 11.5T268-133q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11.5 27.5T692-133q-11 11-28 11t-28-11L480-288Zm0-240L324-373q-11 11-27.5 11.5T268-373q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11.5 27.5T692-373q-11 11-28 11t-28-11L480-528Zm0-240L324-613q-11 11-27.5 11.5T268-613q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l183 183-56 56-184-183Z"/>
</svg>`,
})
export class MsrfStat3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
