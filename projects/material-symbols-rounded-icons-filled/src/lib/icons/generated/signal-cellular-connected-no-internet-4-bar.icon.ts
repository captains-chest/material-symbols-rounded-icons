import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signal-cellular-connected-no-internet-4-bar-icon',
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
  <path d="m148-148 663-663q20-20 44.5-9.5T880-783v143h-40q-50 0-85 35t-35 85v440H176q-26 0-36.5-24.5T148-148Zm692 68q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-40-200v-240q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v241q0 17-11.5 28T840-240q-17 0-28.5-11.5T800-280Z"/>
</svg>`,
})
export class MsrfSignalCellularConnectedNoInternet4BarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
