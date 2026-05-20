import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-pixel-9-pro-fold-icon',
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
  <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm320-80h320v-560H480v560ZM200-480h160q17 0 28.5-11.5T400-520q0-17-11.5-28.5T360-560H200q-17 0-28.5 11.5T160-520q0 17 11.5 28.5T200-480Zm440-160q17 0 28.5-11.5T680-680q0-17-11.5-28.5T640-720q-17 0-28.5 11.5T600-680q0 17 11.5 28.5T640-640Zm-440 0h160q17 0 28.5-11.5T400-680q0-17-11.5-28.5T360-720H200q-17 0-28.5 11.5T160-680q0 17 11.5 28.5T200-640Z"/>
</svg>`,
})
export class MsrfPixel9ProFoldIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
