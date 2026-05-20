import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-flex-no-wrap-icon',
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
  <path d="M40-320v-320q0-17 11.5-28.5T80-680h160q17 0 28.5 11.5T280-640v320q0 17-11.5 28.5T240-280H80q-17 0-28.5-11.5T40-320Zm320 0v-320q0-17 11.5-28.5T400-680h160q17 0 28.5 11.5T600-640v320q0 17-11.5 28.5T560-280H400q-17 0-28.5-11.5T360-320Zm320 0v-320q0-17 11.5-28.5T720-680h160q17 0 28.5 11.5T920-640v320q0 17-11.5 28.5T880-280H720q-17 0-28.5-11.5T680-320Zm-560-40h80v-240h-80v240Zm640 0h80v-240h-80v240Z"/>
</svg>`,
})
export class MsrFlexNoWrapIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
