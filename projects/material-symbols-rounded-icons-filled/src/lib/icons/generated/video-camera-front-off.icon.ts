import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-video-camera-front-off-icon',
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
  <path d="M794-54 54-794q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM160-800l560 560q0 33-23.5 56.5T640-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm80 480h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm606 26L713-427q-10 14-28.5 17T652-421L341-732q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h270q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5Z"/>
</svg>`,
})
export class MsrfVideoCameraFrontOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
