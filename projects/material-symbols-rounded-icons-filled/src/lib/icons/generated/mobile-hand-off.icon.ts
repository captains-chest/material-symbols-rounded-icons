import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-hand-off-icon',
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
  <path d="M240-80q-33 0-56.5-23.5T160-160v-528L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q12 12 11.5 28T847-56q-12 11-28 11.5T791-56L421-426q-17 4-33 12t-30 22l-7.5 7.5-7.5 7.5q-22 22-23.5 53t18.5 55L496-80H240Zm360-800q33 0 56.5 23.5T680-800v80h-40q-33 0-56.5 23.5T560-640v128L202-870q8-5 17.5-7.5T240-880h360ZM420-680q17 0 28.5-11.5T460-720q0-17-11.5-28.5T420-760q-17 0-28.5 11.5T380-720q0 17 11.5 28.5T420-680Zm380 408L640-432v-168q0-17 11.5-28.5T680-640q50 0 85 35t35 85v248ZM638-80q-18 0-34.5-7.5T576-109L414-304q-6-7-5.5-16t6.5-15q11-11 27.5-13.5T474-343l286 143 35 35q-11 37-42.5 61T680-80h-42Z"/>
</svg>`,
})
export class MsrfMobileHandOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
