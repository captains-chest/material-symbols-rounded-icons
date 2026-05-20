import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-weekend-icon',
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
  <path d="M160-680q0-50 35-85t85-35h400q50 0 85 35t35 85v80q50 0 85 35t35 85v200q0 50-35 85t-85 35H160q-50 0-85-35t-35-85v-200q0-50 35-85t85-35v-80Zm80 0v112q18 17 29 39t11 49v80h400v-80q0-27 11-49t29-39v-112q0-17-11.5-28.5T680-720H280q-17 0-28.5 11.5T240-680Zm520 360H200v-160q0-8-3-15.5t-8.5-13q-5.5-5.5-13-8.5t-15.5-3q-17 0-28.5 11.5T120-480v200q0 17 11.5 28.5T160-240h640q17 0 28.5-11.5T840-280v-200q0-17-11.5-28.5T800-520q-8 0-15.5 3t-13 8.5q-5.5 5.5-8.5 13t-3 15.5v160Zm-280 0Zm0 80Zm0-160Z"/>
</svg>`,
})
export class MsrWeekendIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
