import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-airline-seat-individual-suite-icon',
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
  <path d="M120-280q-33 0-56.5-23.5T40-360v-280q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v280h320v-240q0-33 23.5-56.5T520-680h240q66 0 113 47t47 113v160q0 33-23.5 56.5T840-280H120Zm160-120q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
</svg>`,
})
export class MsrfAirlineSeatIndividualSuiteIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
