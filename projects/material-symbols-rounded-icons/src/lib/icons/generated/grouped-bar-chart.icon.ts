import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-grouped-bar-chart-icon',
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
  <path d="M200-160q-17 0-28.5-11.5T160-200v-400q0-17 11.5-28.5T200-640h80q17 0 28.5 11.5T320-600v400q0 17-11.5 28.5T280-160h-80Zm200 0q-17 0-28.5-11.5T360-200v-200q0-17 11.5-28.5T400-440h80q17 0 28.5 11.5T520-400v200q0 17-11.5 28.5T480-160h-80Zm280 0q-17 0-28.5-11.5T640-200v-560q0-17 11.5-28.5T680-800h80q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160h-80Z"/>
</svg>`,
})
export class MsrGroupedBarChartIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
