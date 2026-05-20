import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-closed-caption-disabled-icon',
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
  <path d="M791-57 687-160H200q-33 0-56.5-23.5T120-240v-487l-65-65q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM280-360h120q17 0 28.5-11.5T440-400v-25q0-8-6-14t-14-6h-20q-8 0-14 6t-6 14v5h-80v-127l-45-45v1q-7 5-11 13t-4 18v160q0 17 11.5 28.5T280-360Zm560-360v388q0 27-24.5 37.5T772-303l-66-66q7-5 10.5-13.5T720-400v-20q0-8-6-14t-14-6h-20q-8 0-14 6t-6 14h-5l-75-75v-45h80v5q0 8 6 14t14 6h20q8 0 14-6t6-14v-25q0-17-11.5-28.5T680-600H560q-17 0-28.5 11.5T520-560v5L343-732q-19-19-8.5-43.5T372-800h388q33 0 56.5 23.5T840-720Z"/>
</svg>`,
})
export class MsrfClosedCaptionDisabledIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
