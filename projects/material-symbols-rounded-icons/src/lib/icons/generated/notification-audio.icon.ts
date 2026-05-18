import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-notification-audio-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M480-500Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q10 2 19 5t17 7q15 7 21.5 22.5T597-727q-7 15-22.5 21t-30.5-1q-15-7-31-10t-33-3q-66 0-113 47t-47 113v280h320v-44q0-17 11.5-28.5T680-364q17 0 28.5 11.5T720-324v44h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200Zm480-240q-13 0-21.5-8.5T650-470v-180q0-13 8.5-21.5T680-680q13 0 21.5 8.5T710-650v180q0 13-8.5 21.5T680-440Zm-110-60q-13 0-21.5-8.5T540-530v-60q0-13 8.5-21.5T570-620q13 0 21.5 8.5T600-590v60q0 13-8.5 21.5T570-500Zm220 0q-13 0-21.5-8.5T760-530v-60q0-13 8.5-21.5T790-620q13 0 21.5 8.5T820-590v60q0 13-8.5 21.5T790-500Z"/>
</svg>`,
})
export class MsrNotificationAudioIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
