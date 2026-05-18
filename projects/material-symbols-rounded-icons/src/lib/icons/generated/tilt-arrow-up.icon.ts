import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tilt-arrow-up-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M180-120q-38 0-62-29.5T102-217l124-560q6-28 28-45.5t50-17.5h352q28 0 50 17.5t28 45.5l124 560q8 38-16 67.5T780-120H180Zm0-80h600L656-760H304L180-200Zm260-287v127q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-127l36 36q11 11 27.5 11t28.5-12q11-11 11-28t-11-28L508-612q-12-12-28-12t-28 12L348-508q-11 11-11 27.5t11 28.5q12 12 28.5 12t28.5-12l35-35Zm340 287H180h600Z"/>
</svg>`,
})
export class MsrTiltArrowUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
