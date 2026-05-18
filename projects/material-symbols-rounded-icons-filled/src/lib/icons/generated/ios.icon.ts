import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-ios-icon',
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
  <path d="M200-280q-17 0-28.5-11.5T160-320v-160q0-17 11.5-28.5T200-520q17 0 28.5 11.5T240-480v160q0 17-11.5 28.5T200-280Zm160 0q-33 0-56.5-23.5T280-360v-240q0-33 23.5-56.5T360-680h80q33 0 56.5 23.5T520-600v240q0 33-23.5 56.5T440-280h-80Zm0-80h80v-240h-80v240Zm240 80q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h120v-80h-80q-33 0-56.5-23.5T560-520v-80q0-33 23.5-56.5T640-680h120q17 0 28.5 11.5T800-640q0 17-11.5 28.5T760-600H640v80h80q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H600ZM200-600q-17 0-28.5-11.5T160-640q0-17 11.5-28.5T200-680q17 0 28.5 11.5T240-640q0 17-11.5 28.5T200-600Z"/>
</svg>`,
})
export class MsrfIosIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
