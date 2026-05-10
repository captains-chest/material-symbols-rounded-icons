import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signal-cellular-connected-no-internet-0-bar-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m148-148 664-664q19-19 43.5-8.5T880-783v103q0 17-11.5 28.5T840-640q-17 0-28.5-11.5T800-680v-7L273-160h407q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H177q-27 0-37.5-24.5T148-148Zm692 68q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-40-200v-240q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v240q0 17-11.5 28.5T840-240q-17 0-28.5-11.5T800-280Z"/>
</svg>`,
})
export class MsrfSignalCellularConnectedNoInternet0BarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
