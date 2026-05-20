import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-quickreply-icon',
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
  <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v200q0 17-11.5 28.5T840-560q-17 0-28.5-11.5T800-600v-200H160v525l46-45h354q17 0 28.5 11.5T600-280q0 17-11.5 28.5T560-240H240Zm520 0h-40q-17 0-28.5-11.5T680-280v-160q0-17 11.5-28.5T720-480h115q16 0 24.5 13.5T862-438l-50 118h39q17 0 26 14t1 29L779-78q-4 7-11.5 5.5T760-82v-158Zm-600-80v-480 480Z"/>
</svg>`,
})
export class MsrQuickreplyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
