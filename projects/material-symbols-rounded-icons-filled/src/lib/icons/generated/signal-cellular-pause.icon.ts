import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signal-cellular-pause-icon',
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
  <path d="m148-148 664-664q19-19 43.5-8.5T880-783v303q0 17-11.5 28.5T840-440H640q-50 0-85 35t-35 85v200q0 17-11.5 28.5T480-80H177q-27 0-37.5-24.5T148-148Zm612 28v-200q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320v200q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120Zm-160 0v-200q0-17 11.5-28.5T640-360q17 0 28.5 11.5T680-320v200q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120Z"/>
</svg>`,
})
export class MsrfSignalCellularPauseIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
