import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-airline-seat-legroom-reduced-icon',
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
  <path d="M620-120q-32 0-54.5-26T551-203l49-197H320q-33 0-56.5-23.5T240-480v-320q0-17 11.5-28.5T280-840h160q17 0 28.5 11.5T480-800v200h197q40 0 64 32t13 70l-74 258h58q27 0 44.5 16.5T800-180q0 27-16.5 43.5T740-120H620ZM200-280q-33 0-56.5-23.5T120-360v-440q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800v440h240q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280H200Z"/>
</svg>`,
})
export class MsrfAirlineSeatLegroomReducedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
