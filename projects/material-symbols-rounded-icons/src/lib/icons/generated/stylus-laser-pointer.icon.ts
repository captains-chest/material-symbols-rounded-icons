import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-stylus-laser-pointer-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M360-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm179-139q-6-55-41-97t-87-57l106-107H236q-32 0-54-22t-22-54q0-20 10.5-37.5T198-622l486-291q18-11 38-5.5t31 23.5q11 18 5.5 37.5T736-827L360-600h364q32 0 54 22t22 54q0 18-4.5 35.5T778-458L539-219Z"/>
</svg>`,
})
export class MsrStylusLaserPointerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
