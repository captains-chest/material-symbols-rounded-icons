import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-emergency-recording-icon',
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
  <path d="M360-411v91q0 17 11.5 28.5T400-280q17 0 28.5-11.5T440-320v-91l86 49q14 8 30 4t24-18q8-14 3.5-30.5T565-431l-85-49 85-49q14-8 18.5-24.5T580-584q-8-14-24-18t-30 4l-86 49v-91q0-17-11.5-28.5T400-680q-17 0-28.5 11.5T360-640v91l-86-49q-14-8-30-4t-24 18q-8 14-3.5 30.5T235-529l85 49-85 49q-14 8-18.5 24.5T220-376q8 14 24 18t30-4l86-49ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Z"/>
</svg>`,
})
export class MsrfEmergencyRecordingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
