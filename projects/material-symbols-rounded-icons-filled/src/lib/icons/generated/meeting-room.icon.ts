import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-meeting-room-icon',
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
  <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-600q0-17 11.5-28.5T240-840h280q17 0 28.5 11.5T560-800h160q17 0 28.5 11.5T760-760v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120h-80q-17 0-28.5-11.5T680-160v-560H560v560q0 17-11.5 28.5T520-120H160Zm320-360q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440q17 0 28.5-11.5T480-480Z"/>
</svg>`,
})
export class MsrfMeetingRoomIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
