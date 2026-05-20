import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-missed-video-call-icon',
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
  <path d="M428-337q8 0 15-3t13-9l124-125q11-11 11.5-27.5T580-530q-11-11-28-11t-28 11l-96 96-88-86h20q17 0 28.5-11.5T400-560q0-17-11.5-28.5T360-600H240q-17 0-28.5 11.5T200-560v120q0 17 11.5 28.5T240-400q17 0 28.5-11.5T280-440v-28l120 120q6 6 13 8.5t15 2.5ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Z"/>
</svg>`,
})
export class MsrfMissedVideoCallIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
