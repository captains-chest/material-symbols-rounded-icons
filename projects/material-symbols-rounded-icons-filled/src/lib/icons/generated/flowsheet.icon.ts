import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-flowsheet-icon',
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
  <path d="M280-520h120q17 0 28.5-11.5T440-560q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h681q11 0 18 6t7 16q0 11-7.5 17.5T841-756q-8-2-18.5-3t-22.5-1q-83 0-141.5 58.5T600-560q0 22 4 42t12 38h-56q-50 0-85 35t-35 85v40q-28 20-47 48.5T366-209q-5 20-20 34.5T311-160H160Zm400 40q17 0 28.5-11.5T600-160q0-17-11.5-28.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120Zm240-400q17 0 28.5-11.5T840-560q0-17-11.5-28.5T800-600q-17 0-28.5 11.5T760-560q0 17 11.5 28.5T800-520ZM560-40q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87q0-17 11.5-28.5T560-400h200v-47q-35-12-57.5-43T680-560q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T840-447v87q0 17-11.5 28.5T800-320H600v47q35 12 57.5 43t22.5 70q0 50-35 85t-85 35ZM400-360q17 0 28.5-11.5T440-400q0-17-11.5-28.5T400-440H280q-17 0-28.5 11.5T240-400q0 17 11.5 28.5T280-360h120Z"/>
</svg>`,
})
export class MsrfFlowsheetIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
