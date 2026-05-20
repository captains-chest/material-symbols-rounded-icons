import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-electric-bolt-icon',
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
  <path d="m440-380-237-30q-25-3-32.5-27t10.5-41l409-392q5-5 12-7.5t19-2.5q20 0 30.5 17t.5 35L520-580l237 30q25 3 32.5 27T779-482L370-90q-5 5-12 7.5T339-80q-20 0-30.5-17t-.5-35l132-248Z"/>
</svg>`,
})
export class MsrfElectricBoltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
