import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-grid-goldenratio-icon',
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
  <path d="M360-360H120q-17 0-28.5-11.5T80-400q0-17 11.5-28.5T120-440h240v-80H120q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h240v-240q0-17 11.5-28.5T400-880q17 0 28.5 11.5T440-840v240h80v-240q0-17 11.5-28.5T560-880q17 0 28.5 11.5T600-840v240h240q17 0 28.5 11.5T880-560q0 17-11.5 28.5T840-520H600v80h240q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H600v240q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-240h-80v240q0 17-11.5 28.5T400-80q-17 0-28.5-11.5T360-120v-240Zm80-80h80v-80h-80v80Z"/>
</svg>`,
})
export class MsrfGridGoldenratioIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
