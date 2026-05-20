import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-person-text-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M720-240q-17 0-28.5-11.5T680-280q0-17 11.5-28.5T720-320h120q17 0 28.5 11.5T880-280q0 17-11.5 28.5T840-240H720Zm-80-200q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520h200q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H640Zm-80-200q-17 0-28.5-11.5T520-680q0-17 11.5-28.5T560-720h280q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H560ZM320-480q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM120-240q-17 0-28.5-11.5T80-280v-36q0-21 10-40t28-30q45-27 95.5-40.5T320-440q56 0 106.5 13.5T522-386q18 11 28 30t10 40v36q0 17-11.5 28.5T520-240H120Z"/>
</svg>`,
})
export class MsrfPersonTextIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
