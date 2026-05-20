import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-surround-sound-icon',
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
  <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120q0 30-8 58t-25 53q-9 14-8.5 31t11.5 28q12 12 28 11.5t26-13.5q27-36 41.5-79t14.5-89q0-46-14.5-89T704-648q-10-13-26-13.5T650-650q-11 11-11.5 28t8.5 31q17 25 25 53t8 58Zm-400 0q0-30 8-58t25-53q9-14 8.5-31T310-650q-12-12-28-11.5T256-648q-27 36-41.5 79T200-480q0 46 14.5 89t41.5 79q10 13 26 13.5t28-11.5q11-11 11.5-28t-8.5-31q-17-25-25-53t-8-58ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
</svg>`,
})
export class MsrfSurroundSoundIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
