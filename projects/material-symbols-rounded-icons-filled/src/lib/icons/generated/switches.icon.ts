import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-switches-icon',
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
  <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680q50 0 90.5 22t69.5 58h320q50 0 85 35t35 85q0 50-35 85t-85 35H440q-29 36-69.5 58T280-280Zm196-160h284q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H476q2 9 3 20t1 20q0 9-1 20t-3 20Z"/>
</svg>`,
})
export class MsrfSwitchesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
