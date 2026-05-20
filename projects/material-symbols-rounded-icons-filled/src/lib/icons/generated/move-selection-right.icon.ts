import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-move-selection-right-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M480-240q-33 0-56.5-23.5T400-320v-320q0-33 23.5-56.5T480-720h320q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H480ZM280-640q-17 0-28.5-11.5T240-680q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680q0 17-11.5 28.5T280-640Zm-160 0q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680q0 17-11.5 28.5T120-640Zm0 200q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520q17 0 28.5 11.5T160-480q0 17-11.5 28.5T120-440Zm0 200q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280q0 17-11.5 28.5T120-240Zm160 0q-17 0-28.5-11.5T240-280q0-17 11.5-28.5T280-320q17 0 28.5 11.5T320-280q0 17-11.5 28.5T280-240Z"/>
</svg>`,
})
export class MsrfMoveSelectionRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
