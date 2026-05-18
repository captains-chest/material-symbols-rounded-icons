import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-quickreply-icon',
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
  <path d="M760-240h-40q-17 0-28.5-11.5T680-280v-160q0-17 11.5-28.5T720-480h115q16 0 24.5 13.5T862-438l-50 118h39q17 0 26 14t1 29L779-78q-4 7-11.5 5.5T760-82v-158Zm-520 0-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v200q0 17-11.5 28.5T840-560H680q-33 0-56.5 23.5T600-480v200q0 17-11.5 28.5T560-240H240Z"/>
</svg>`,
})
export class MsrfQuickreplyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
