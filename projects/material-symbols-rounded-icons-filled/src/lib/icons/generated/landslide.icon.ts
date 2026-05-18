import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-landslide-icon',
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
  <path d="M80-160v-90l160 52 441-147 103 137q30 40 8 84t-72 44H160q-33 0-56.5-23.5T80-160Zm160-122L80-336v-74l160 52 276-92 102 41-378 127Zm533-133 111-49q17-8 26.5-22.5T920-519v-73q0-21-13.5-37T873-650l-105-24q-14-3-26.5.5T718-662l-55 44q-11 8-17 20.5t-6 26.5v62q0 14 6 26.5t17 20.5l49 39q14 11 30 13t31-5Zm-533-27L80-496v-64q0-33 23.5-56.5T160-640h120q19 0 36 8.5t28 23.5l79 105-183 61Zm269-210 133-53q17-7 27.5-22t10.5-34v-110q0-22-13.5-38T632-930l-128-25q-12-2-23.5 0t-21.5 9l-72 48q-13 8-20 21.5t-7 28.5v96q0 15 7 28.5t20 21.5l67 44q12 8 26.5 9.5T509-652Z"/>
</svg>`,
})
export class MsrfLandslideIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
