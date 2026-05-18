import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-star-rate-icon',
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
  <path d="M480-308 332-195q-11 9-24 8.5t-23-7.5q-10-7-15.5-19t-.5-26l57-185-145-103q-12-8-15-21t1-24q4-11 14-19.5t24-8.5h179l58-192q5-14 15.5-21.5T480-821q12 0 22.5 7.5T518-792l58 192h179q14 0 24 8.5t14 19.5q4 11 1 24t-15 21L634-424l57 185q5 14-.5 26T675-194q-10 7-23 7.5t-24-8.5L480-308Z"/>
</svg>`,
})
export class MsrfStarRateIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
