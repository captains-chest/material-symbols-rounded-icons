import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tilt-arrow-up-icon',
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
  <path d="M180-120q-38 0-62-29.5T102-217l124-560q6-28 28-45.5t50-17.5h352q28 0 50 17.5t28 45.5l124 560q8 38-16 67.5T780-120H180Zm260-367v127q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-127l36 36q11 11 27.5 11t28.5-12q11-11 11-28t-11-28L508-612q-12-12-28-12t-28 12L348-508q-11 11-11 27.5t11 28.5q12 12 28.5 12t28.5-12l35-35Z"/>
</svg>`,
})
export class MsrfTiltArrowUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
