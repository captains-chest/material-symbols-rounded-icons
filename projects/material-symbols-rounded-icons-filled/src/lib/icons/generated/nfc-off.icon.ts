import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nfc-off-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-527l-65-65q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57l-64-63H200Zm80-447v247q0 17 11.5 28.5T320-280h247l-80-80H360v-127l-80-80Zm560-193v429q0 27-24.5 37.5T772-302l-92-92v-246q0-17-11.5-28.5T640-680H520q-26 0-46 14t-29 37L302-772q-19-19-8.5-43.5T331-840h429q33 0 56.5 23.5T840-760ZM600-600v126l-80-80v-46h80Z"/>
</svg>`,
})
export class MsrfNfcOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
