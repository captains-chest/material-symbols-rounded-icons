import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-north-west-icon',
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
  <path d="M280-624v224q0 17-11.5 28.5T240-360q-17 0-28.5-11.5T200-400v-320q0-17 11.5-28.5T240-760h320q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680H336l436 436q11 11 11 28t-11 28q-11 11-28 11t-28-11L280-624Z"/>
</svg>`,
})
export class MsrfNorthWestIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
