import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-detector-icon',
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
  <path d="m324-640 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-40q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v40q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336Zm144 400q-88 0-168.5-33T169-249q-5-5-8.5-13t-3.5-16q0-17 12-28.5t29-11.5q8 0 15.5 3t12.5 9q51 51 117 78.5T481-200q72 0 137.5-27T735-305q5-5 12.5-8.5T763-317q17 0 28.5 11.5T803-277q0 8-3.5 15.5T791-249q-63 63-143 96t-168 33Zm0-160q-56 0-107-21t-91-61q-5-5-8.5-12.5T270-390q0-17 11.5-28.5T310-430q8 0 15.5 3.5T338-418q29 29 65.5 43.5T480-360q40 0 76.5-14.5T622-418q5-5 12.5-8.5T650-430q17 0 28.5 11.5T690-390q0 8-3.5 15.5T678-362q-40 40-91 61t-107 21Z"/>
</svg>`,
})
export class MsrfDetectorIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
