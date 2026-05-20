import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-convert-to-text-icon',
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
  <path d="M480-480Zm280 360H440q-17 0-28.5-11.5T400-160q0-17 11.5-28.5T440-200h320v-560H200v120q0 17-11.5 28.5T160-600q-17 0-28.5-11.5T120-640v-120q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120ZM120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h62q-48-23-77.5-68T75-330q0-79 55.5-134.5T265-520q17 0 28.5 11.5T305-480q0 17-11.5 28.5T265-440q-45 0-77.5 32T155-330q0 39 24 69t61 38v-57q0-17 11.5-28.5T280-320q17 0 28.5 11.5T320-280v160q0 17-11.5 28.5T280-80H120Zm320-200h80q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360h-80q-17 0-28.5 11.5T400-320q0 17 11.5 28.5T440-280Zm0-160h200q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H440q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Z"/>
</svg>`,
})
export class MsrConvertToTextIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
