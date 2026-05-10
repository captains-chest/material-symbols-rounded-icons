import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-flight-takeoff-icon',
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
  <path d="M800-120H160q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120ZM212-464l192-52-139-236q-8-14-3-30t22-21l17-5q9-3 18-1t16 8l259 233 200-54q32-9 58 12t26 56q0 22-13.5 39T830-492L223-328q-13 4-25-1t-19-17L98-484q-7-11-1.5-23t18.5-14l15-3q6-1 11 .5t10 5.5l61 54Z"/>
</svg>`,
})
export class MsrfFlightTakeoffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
