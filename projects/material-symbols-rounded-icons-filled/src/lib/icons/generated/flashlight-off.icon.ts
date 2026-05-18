import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-flashlight-off-icon',
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
  <path d="M320-160v-368L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L640-208v48q0 33-23.5 56.5T560-80H400q-33 0-56.5-23.5T320-160Zm27-600q-16 0-30.5-6T291-783l-21-21q-20-20-4-48t54-28h320q33 0 56.5 23.5T720-800q0 17-11.5 28.5T680-760H347Zm224 257L445-629q-14-14-6.5-32.5T466-680h213q24 0 33 20t-5 40l-74 111q-11 16-29.5 18T571-503Z"/>
</svg>`,
})
export class MsrfFlashlightOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
