import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-swipe-down-alt-icon',
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
  <path d="M480-97q-8 0-15-2.5t-13-8.5L348-212q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l35 35v-171q-69-14-114.5-68.5T280-600q0-83 58.5-141.5T480-800q83 0 141.5 58.5T680-600q0 73-45.5 127.5T520-404v171l36-36q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-108q-6 6-13 8.5T480-97Z"/>
</svg>`,
})
export class MsrfSwipeDownAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
