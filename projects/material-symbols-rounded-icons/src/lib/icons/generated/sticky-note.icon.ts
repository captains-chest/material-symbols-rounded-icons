import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sticky-note-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v407q0 16-6 30.5T817-297L663-143q-11 11-25.5 17t-30.5 6H200Zm400-80v-80q0-33 23.5-56.5T680-360h80v-400H200v560h400ZM440-560v200q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-200h80q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600q0 17 11.5 28.5T360-560h80Zm160 360Zm-400 0v-560 560Z"/>
</svg>`,
})
export class MsrStickyNoteIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
