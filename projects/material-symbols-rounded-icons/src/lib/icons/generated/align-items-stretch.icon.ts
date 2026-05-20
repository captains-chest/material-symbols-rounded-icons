import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-align-items-stretch-icon',
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
  <path d="M320-240q-17 0-28.5-11.5T280-280v-400q0-17 11.5-28.5T320-720h40q17 0 28.5 11.5T400-680v400q0 17-11.5 28.5T360-240h-40Zm280 0q-17 0-28.5-11.5T560-280v-400q0-17 11.5-28.5T600-720h40q17 0 28.5 11.5T680-680v400q0 17-11.5 28.5T640-240h-40ZM120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm0-720q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z"/>
</svg>`,
})
export class MsrAlignItemsStretchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
