import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-local-police-icon',
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
  <path d="m480-420 85 65q6 5 12 .5t4-11.5l-33-106 89-70q5-5 3-11.5t-9-6.5H524l-34-107q-2-7-10-7t-10 7l-34 107H329q-7 0-9.5 6.5T322-542l88 70-33 107q-2 7 4 11.5t12-.5l87-66Zm0 336q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"/>
</svg>`,
})
export class MsrfLocalPoliceIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
