import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-battery-full-alt-icon',
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
  <path d="M200-280q-17 0-28.5-11.5T160-320v-80h-40q-17 0-28.5-11.5T80-440v-80q0-17 11.5-28.5T120-560h40v-80q0-17 11.5-28.5T200-680h640q17 0 28.5 11.5T880-640v320q0 17-11.5 28.5T840-280H200Z"/>
</svg>`,
})
export class MsrfBatteryFullAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
