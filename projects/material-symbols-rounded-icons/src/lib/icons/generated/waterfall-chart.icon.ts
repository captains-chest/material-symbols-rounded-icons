import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-waterfall-chart-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M180-160q-25 0-42.5-17.5T120-220v-120q0-25 17.5-42.5T180-400q25 0 42.5 17.5T240-340v120q0 25-17.5 42.5T180-160Zm200-240q-25 0-42.5-17.5T320-460v-80q0-25 17.5-42.5T380-600q25 0 42.5 17.5T440-540v80q0 25-17.5 42.5T380-400Zm200-200q-25 0-42.5-17.5T520-660v-80q0-25 17.5-42.5T580-800q25 0 42.5 17.5T640-740v80q0 25-17.5 42.5T580-600Zm200 440q-25 0-42.5-17.5T720-220v-520q0-25 17.5-42.5T780-800q25 0 42.5 17.5T840-740v520q0 25-17.5 42.5T780-160Z"/>
</svg>`,
})
export class MsrWaterfallChartIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
