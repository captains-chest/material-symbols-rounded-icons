import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-hand-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360q33 0 56.5 23.5T680-800v40q0 17-11.5 28.5T640-720q-33 0-56.5 23.5T560-640v251l-50-26q-38-19-80-13t-72 36l-15 15q-22 22-23 53t19 55l102 123q17 20 6 43t-37 23H240Zm180-600q17 0 28.5-11.5T460-720q0-17-11.5-28.5T420-760q-17 0-28.5 11.5T380-720q0 17 11.5 28.5T420-680ZM638-80q-18 0-34.5-7.5T576-109L413-304q-6-7-5-16t7-15q12-12 28-14t31 6l108 54q20 10 39-1.5t19-34.5v-275q0-17 11.5-28.5T680-640q50 0 85 35t35 85v320q0 50-35 85t-85 35h-42Z"/>
</svg>`,
})
export class MsrfMobileHandIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
