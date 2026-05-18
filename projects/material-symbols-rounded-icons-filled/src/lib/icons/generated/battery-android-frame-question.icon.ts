import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-battery-android-frame-question-icon',
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
  <path d="M160-240q-50 0-85-35t-35-85v-240q0-50 35-85t85-35h451q17 0 28.5 11.5T651-680q0 17-11.5 28.5T611-640H160q-17 0-28.5 11.5T120-600v240q0 17 11.5 28.5T160-320h482q17 0 28.5 11.5T682-280q0 17-11.5 28.5T642-240H160Zm40-120q-17 0-28.5-11.5T160-400v-160q0-17 11.5-28.5T200-600h381q17 0 28.5 11.5T621-560v160q0 17-11.5 28.5T581-360H200Zm601-62q-12 0-20.5-7.5T772-449q0-27 15-43.5t33-33.5q12-11 22-24.5t10-30.5q0-20-15.5-32T800-625q-13 0-24.5 5.5T756-604q-8 9-18 14.5t-21 .5q-11-5-15.5-16t1.5-21q15-25 41-39.5t56-14.5q44 0 76.5 27.5T909-583q0 23-11.5 43T869-503l-23.5 23.5Q833-467 830-450q-2 11-10 19.5t-19 8.5Zm-1 122q-17 0-28.5-11.5T760-340q0-17 11.5-28.5T800-380q17 0 28.5 11.5T840-340q0 17-11.5 28.5T800-300Z"/>
</svg>`,
})
export class MsrfBatteryAndroidFrameQuestionIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
