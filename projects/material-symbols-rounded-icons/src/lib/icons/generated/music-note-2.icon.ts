import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-music-note-2-icon',
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
  <path d="M240-120q-66 0-113-47T80-280q0-66 47-113t113-47q23 0 42.5 5.5T320-418v-308q0-15 9.5-26.5T353-766l400-66q18-3 32.5 8.5T800-793v433q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T720-498v-165l-320 63v320q0 66-47 113t-113 47Z"/>
</svg>`,
})
export class MsrMusicNote2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
