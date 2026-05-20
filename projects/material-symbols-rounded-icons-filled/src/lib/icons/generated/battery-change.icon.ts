import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-battery-change-icon',
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
  <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Zm80-291q0 23 8.5 43.5T433-291l9 9q11 11 27.5 11t28.5-11q12-12 12-28.5T498-339l-9-9q-5-5-7-10.5t-2-11.5q0-7 2-12.5t7-10.5l38-38q16-16 24.5-36t8.5-42q0-23-8.5-43.5T527-589l-10-10q-12-12-28-11.5T461-598q-11 12-11.5 28t11.5 28l9 9q5 5 7.5 10.5T480-510q0 6-2.5 11.5T470-488l-37 38q-16 16-24.5 36t-8.5 43Z"/>
</svg>`,
})
export class MsrfBatteryChangeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
