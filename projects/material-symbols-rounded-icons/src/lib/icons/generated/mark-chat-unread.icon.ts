import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mark-chat-unread-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h360q17 0 28.5 11.5T560-840q0 17-11.5 28.5T520-800H160v525l46-45h594v-280q0-17 11.5-28.5T840-640q17 0 28.5 11.5T880-600v280q0 33-23.5 56.5T800-240H240Zm520-480q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-600-80v480-480Z"/>
</svg>`,
})
export class MsrMarkChatUnreadIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
