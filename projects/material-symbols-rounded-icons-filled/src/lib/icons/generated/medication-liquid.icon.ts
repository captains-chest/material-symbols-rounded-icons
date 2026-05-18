import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-medication-liquid-icon',
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
  <path d="M160-840h400q17 0 28.5 11.5T600-800q0 17-11.5 28.5T560-760H160q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840Zm140 480v40q0 25 17.5 42.5T360-260q25 0 42.5-17.5T420-320v-40h40q25 0 42.5-17.5T520-420q0-25-17.5-42.5T460-480h-40v-40q0-25-17.5-42.5T360-580q-25 0-42.5 17.5T300-520v40h-40q-25 0-42.5 17.5T200-420q0 25 17.5 42.5T260-360h40ZM160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h400q33 0 56.5 23.5T640-640v440q0 33-23.5 56.5T560-120H160Zm600-290q-35-17-57.5-56.5T680-560q0-68 34.5-114t85.5-46q51 0 85.5 46T920-560q0 54-22.5 93.5T840-410v250q0 17-11.5 28.5T800-120q-17 0-28.5-11.5T760-160v-250Z"/>
</svg>`,
})
export class MsrfMedicationLiquidIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
