import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-format-text-clip-icon',
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
  <path d="M200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160Zm560 0q-17 0-28.5-11.5T720-200v-240H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h360v-240q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160Z"/>
</svg>`,
})
export class MsrFormatTextClipIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
