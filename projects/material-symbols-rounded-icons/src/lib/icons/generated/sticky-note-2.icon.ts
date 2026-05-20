import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sticky-note-2-icon',
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
  <path d="M200-200h360v-160q0-17 11.5-28.5T600-400h160v-360H200v560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v367q0 16-6 30.5T817-337L623-143q-11 11-25.5 17t-30.5 6H200Zm240-280H320q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480h120q17 0 28.5 11.5T480-440q0 17-11.5 28.5T440-400Zm200-160H320q-17 0-28.5-11.5T280-600q0-17 11.5-28.5T320-640h320q17 0 28.5 11.5T680-600q0 17-11.5 28.5T640-560ZM200-200v-560 560Z"/>
</svg>`,
})
export class MsrStickyNote2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
