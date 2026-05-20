import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-maps-ugc-icon',
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
  <path d="M118-308q-19-41-28.5-84T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-45 0-88-9.5T308-118L110-60q-23 7-40-10t-10-40l58-198Zm322-132v80q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-80h80q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520h-80v-80q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v80h-80q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h80Z"/>
</svg>`,
})
export class MsrfMapsUgcIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
