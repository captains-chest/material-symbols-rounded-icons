import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-arrow-shape-up-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M320-160v-200H183q-19 0-27-17t4-32l289-353q12-15 31-15t31 15l289 353q12 15 4 32t-27 17H640v200q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160Zm80-40h160v-200q0-17 11.5-28.5T600-440h71L480-674 289-440h71q17 0 28.5 11.5T400-400v200Zm80-240Z"/>
</svg>`,
})
export class MsrArrowShapeUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
