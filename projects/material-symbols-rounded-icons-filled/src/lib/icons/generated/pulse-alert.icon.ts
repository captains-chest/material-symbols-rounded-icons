import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-pulse-alert-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M680-440v-120q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560v120q0 17-11.5 28.5T720-400q-17 0-28.5-11.5T680-440Zm-559-40q-22-35-31.5-69.5T80-621q0-94 63-156.5T300-840q51 0 98.5 22t81.5 62q34-40 81-62t99-22q94 0 157 63.5T880-619q-32-29-73-45t-87-16q-90 0-156 57.5T484-480h-62l-68-102q-6-9-14.5-13.5T321-600q-10 0-19 4.5T287-582l-69 102h-97Zm232 246q-61-55-101.5-94.5T182-400h58q10 0 19-5t14-13l47-70 47 70q5 8 14 13t19 5h84q9 55 40.5 99t78.5 70l-70 63q-11 10-25 15t-28 5q-14 0-28-5t-25-15l-74-66Zm367-46q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280Z"/>
</svg>`,
})
export class MsrfPulseAlertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
