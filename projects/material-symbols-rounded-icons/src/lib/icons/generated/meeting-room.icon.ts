import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-meeting-room-icon',
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
  <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-600q0-17 11.5-28.5T240-840h320q17 0 28.5 11.5T600-800h120q17 0 28.5 11.5T760-760v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120h-80q-17 0-28.5-11.5T680-160v-560h-80v560q0 17-11.5 28.5T560-120H160Zm120-640v560-560Zm200 280q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440q17 0 28.5-11.5T480-480ZM280-200h240v-560H280v560Z"/>
</svg>`,
})
export class MsrMeetingRoomIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
