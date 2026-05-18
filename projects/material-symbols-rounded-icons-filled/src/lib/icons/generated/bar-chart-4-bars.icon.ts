import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-bar-chart-4-bars-icon',
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
  <path d="M120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm60-120q-25 0-42.5-17.5T120-300v-160q0-25 17.5-42.5T180-520q25 0 42.5 17.5T240-460v160q0 25-17.5 42.5T180-240Zm200 0q-25 0-42.5-17.5T320-300v-360q0-25 17.5-42.5T380-720q25 0 42.5 17.5T440-660v360q0 25-17.5 42.5T380-240Zm200 0q-25 0-42.5-17.5T520-300v-240q0-25 17.5-42.5T580-600q25 0 42.5 17.5T640-540v240q0 25-17.5 42.5T580-240Zm200 0q-25 0-42.5-17.5T720-300v-480q0-25 17.5-42.5T780-840q25 0 42.5 17.5T840-780v480q0 25-17.5 42.5T780-240Z"/>
</svg>`,
})
export class MsrfBarChart4BarsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
