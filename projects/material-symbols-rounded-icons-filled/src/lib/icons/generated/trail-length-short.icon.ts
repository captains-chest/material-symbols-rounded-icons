import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-trail-length-short-icon',
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
  <path d="M600-280q-73 0-127.5-45.5T404-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h204q5-23 13.5-43t22.5-37H280q-17 0-28.5-11.5T240-640q0-17 11.5-28.5T280-680h320q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm-280 0q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h40q17 0 28.5 11.5T400-320q0 17-11.5 28.5T360-280h-40Z"/>
</svg>`,
})
export class MsrfTrailLengthShortIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
