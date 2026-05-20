import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-multi-room-icon',
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
  <path d="M200-120q-17 0-28.5-11.5T160-160v-80q0-17 11.5-28.5T200-280h280q17 0 28.5 11.5T520-240v80q0 17-11.5 28.5T480-120H200Zm440 0q-17 0-28.5-11.5T600-160v-80q0-17 11.5-28.5T640-280h120q17 0 28.5 11.5T800-240v80q0 17-11.5 28.5T760-120H640ZM200-360q-17 0-28.5-11.5T160-400v-80q0-17 11.5-28.5T200-520h120q17 0 28.5 11.5T360-480v80q0 17-11.5 28.5T320-360H200Zm280 0q-17 0-28.5-11.5T440-400v-80q0-17 11.5-28.5T480-520h280q17 0 28.5 11.5T800-480v80q0 17-11.5 28.5T760-360H480ZM220-600q-14 0-18.5-13.5T208-636l224-168q11-8 23-12t25-4q13 0 25 4t23 12l224 168q11 9 6.5 22.5T740-600H220Z"/>
</svg>`,
})
export class MsrfNestMultiRoomIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
