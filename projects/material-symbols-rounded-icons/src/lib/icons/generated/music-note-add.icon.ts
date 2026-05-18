import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-music-note-add-icon',
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
  <path d="M480-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T560-418v-382q0-17 11.5-28.5T600-840h160q17 0 28.5 11.5T800-800v80q0 17-11.5 28.5T760-680H640v400q0 66-47 113t-113 47ZM280-640h-80q-17 0-28.5-11.5T160-680q0-17 11.5-28.5T200-720h80v-80q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v80h80q17 0 28.5 11.5T480-680q0 17-11.5 28.5T440-640h-80v80q0 17-11.5 28.5T320-520q-17 0-28.5-11.5T280-560v-80Z"/>
</svg>`,
})
export class MsrMusicNoteAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
