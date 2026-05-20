import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-bus-map-pin-2-icon',
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
  <path d="M280-80h-40q-17 0-28.5-11.5T200-120v-40q-33 0-56.5-23.5T120-240v-440q0-33 23.5-56.5T200-760q0-33 23.5-56.5T280-840h255q-5 14-8.5 29t-5.5 31H280v60h243q4 19 11 39t18 41H200v160h484l24 20q23 20 52 20t52-20q8-7 18-2.5t10 15.5v207q0 33-23.5 56.5T760-160v40q0 17-11.5 28.5T720-80h-40q-17 0-28.5-11.5T640-120v-40H320v40q0 17-11.5 28.5T280-80Zm451.5-651.5Q720-743 720-760t11.5-28.5Q743-800 760-800t28.5 11.5Q800-777 800-760t-11.5 28.5Q777-720 760-720t-28.5-11.5ZM280-280h80q17 0 28.5-11.5T400-320q0-17-11.5-28.5T360-360h-80q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm320 0h80q17 0 28.5-11.5T720-320q0-17-11.5-28.5T680-360h-80q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280Zm160-640q-67 0-113.5 48T600-756q0 46 34 99.5T737-540q10 9 23 8.5t23-8.5q69-63 103-116.5t34-99.5q0-68-46.5-116T760-920Z"/>
</svg>`,
})
export class MsrfBusMapPin2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
