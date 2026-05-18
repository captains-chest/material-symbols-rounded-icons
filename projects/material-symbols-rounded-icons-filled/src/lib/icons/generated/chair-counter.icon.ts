import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chair-counter-icon',
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
  <path d="M307-80q-11 0-19-8.5t-8-22.5q0-20 19.5-37t57.5-31q20-7 40.5-12t42.5-7v-82h-80q-17 0-28.5-11.5T320-320q0-17 11.5-28.5T360-360h80v-240h-60q-20 0-35-11.5T324-640h-84q-32 0-56-21.5T160-715q0-69 46-117t114-48h320q68 0 114 48t46 117q0 32-24 53.5T720-640h-84q-6 17-21 28.5T580-600h-60v240h80q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280h-80v82q22 2 42.5 7t40.5 12q38 14 57.5 31t19.5 37q0 14-8 22.5T653-80H307Z"/>
</svg>`,
})
export class MsrfChairCounterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
