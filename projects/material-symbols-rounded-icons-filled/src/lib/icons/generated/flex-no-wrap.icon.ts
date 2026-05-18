import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-flex-no-wrap-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M40-320v-320q0-17 11.5-28.5T80-680h160q17 0 28.5 11.5T280-640v320q0 17-11.5 28.5T240-280H80q-17 0-28.5-11.5T40-320Zm320 0v-320q0-17 11.5-28.5T400-680h160q17 0 28.5 11.5T600-640v320q0 17-11.5 28.5T560-280H400q-17 0-28.5-11.5T360-320Zm320 0v-320q0-17 11.5-28.5T720-680h160q17 0 28.5 11.5T920-640v320q0 17-11.5 28.5T880-280H720q-17 0-28.5-11.5T680-320Zm-560-40h80v-240h-80v240Zm640 0h80v-240h-80v240Z"/>
</svg>`,
})
export class MsrfFlexNoWrapIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
