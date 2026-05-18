import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-flex-wrap-icon',
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
  <path d="M40-120v-280q0-17 11.5-28.5T80-440h160q17 0 28.5 11.5T280-400v280q0 17-11.5 28.5T240-80H80q-17 0-28.5-11.5T40-120Zm320 0v-280q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v280q0 17-11.5 28.5T560-80H400q-17 0-28.5-11.5T360-120Zm320 0v-280q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v280q0 17-11.5 28.5T880-80H720q-17 0-28.5-11.5T680-120Zm-240-40h80v-200h-80v200ZM40-560v-280q0-17 11.5-28.5T80-880h160q17 0 28.5 11.5T280-840v280q0 17-11.5 28.5T240-520H80q-17 0-28.5-11.5T40-560Zm320 0v-280q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v280q0 17-11.5 28.5T560-520H400q-17 0-28.5-11.5T360-560Zm320 0v-280q0-17 11.5-28.5T720-880h160q17 0 28.5 11.5T920-840v280q0 17-11.5 28.5T880-520H720q-17 0-28.5-11.5T680-560Zm-560-40h80v-200h-80v200Zm640 0h80v-200h-80v200Z"/>
</svg>`,
})
export class MsrFlexWrapIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
