import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-swap-horiz-icon',
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
  <path d="m233-320 75 75q11 11 11 27.5T308-189q-12 12-28.5 12T251-189L108-332q-6-6-8.5-13T97-360q0-8 2.5-15t8.5-13l144-144q12-12 28-11.5t28 12.5q11 12 11.5 28T308-475l-75 75h247q17 0 28.5 11.5T520-360q0 17-11.5 28.5T480-320H233Zm494-240H480q-17 0-28.5-11.5T440-600q0-17 11.5-28.5T480-640h247l-75-75q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l143 143q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L708-428q-12 12-28 11.5T652-429q-11-12-11.5-28t11.5-28l75-75Z"/>
</svg>`,
})
export class MsrfSwapHorizIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
