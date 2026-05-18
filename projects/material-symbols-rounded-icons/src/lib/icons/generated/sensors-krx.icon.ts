import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sensors-krx-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-480q0 38 8.5 74.5T194-337q8 15 4.5 32T181-279q-14 10-30 5.5T127-293q-23-42-35-89t-12-98q0-51 12-98.5t35-89.5q8-15 24-19t30 6q14 9 17.5 26t-4.5 32q-17 32-25.5 68.5T160-480Zm320 240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm320-160q0-38-8.5-74.5T766-623q-8-15-5-32t17-26q14-10 30.5-6t24.5 19q23 42 35 89.5t12 98.5q0 51-12 98t-35 89q-8 15-24.5 19.5T778-279q-14-9-17-26t5-32q17-32 25.5-68.5T800-480Zm-320 0Z"/>
</svg>`,
})
export class MsrSensorsKrxIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
