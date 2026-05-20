import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-auto-meeting-room-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M120 856V296q0-33 23.5-56.5T200 216h280q17 0 28.5 11.5T520 256h80q33 0 56.5 23.5T680 336v200q0 17-11.5 28.5T640 576q-17 0-28.5-11.5T600 536V336h-80v560q0 17-11.5 28.5T480 936H80q-17 0-28.5-11.5T40 896q0-17 11.5-28.5T80 856h40Zm240-240q17 0 28.5-11.5T400 576q0-17-11.5-28.5T360 536q-17 0-28.5 11.5T320 576q0 17 11.5 28.5T360 616Zm350 250 32 70q5 12 18 12t18-12l32-70 70-32q12-5 12-18t-12-18l-70-32-32-70q-5-12-18-12t-18 12l-32 70-70 32q-12 5-12 18t12 18l70 32Z"/>
</svg>`,
})
export class MsrfAutoMeetingRoomIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
