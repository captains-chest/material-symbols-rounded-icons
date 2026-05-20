import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-place-item-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-400q0-33 23.5-56.5T200-680h120q17 0 28.5 11.5T360-640q0 17-11.5 28.5T320-600H200v400h560v-400H640q-17 0-28.5-11.5T600-640q0-17 11.5-28.5T640-680h120q33 0 56.5 23.5T840-600v400q0 33-23.5 56.5T760-120H200Zm320-353 36-36q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-348q-12 12-28 12t-28-12L348-452q-11-11-11.5-27.5T348-508q11-11 28-11t28 11l36 35v-447q0-17 11.5-28.5T480-960q17 0 28.5 11.5T520-920v447Z"/>
</svg>`,
})
export class MsrfPlaceItemIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
