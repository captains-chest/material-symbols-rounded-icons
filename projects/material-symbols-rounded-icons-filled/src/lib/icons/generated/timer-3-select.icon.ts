import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-timer-3-select-icon',
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
  <path d="M400-200H220q-25 0-42.5-17.5T160-260q0-25 17.5-42.5T220-320h180v-100H220q-25 0-42.5-17.5T160-480q0-25 17.5-42.5T220-540h180v-100H220q-25 0-42.5-17.5T160-700q0-25 17.5-42.5T220-760h180q50 0 85 35t35 85v76q0 35-24.5 59.5T436-480q35 0 59.5 24.5T520-396v76q0 50-35 85t-85 35Zm386 0H640q-17 0-28.5-11.5T600-240q0-17 11.5-28.5T640-280h120v-40H654q-23 0-38.5-15.5T600-374v-92q0-23 15.5-38.5T654-520h146q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H680v40h106q23 0 38.5 15.5T840-346v92q0 23-15.5 38.5T786-200Z"/>
</svg>`,
})
export class MsrfTimer3SelectIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
