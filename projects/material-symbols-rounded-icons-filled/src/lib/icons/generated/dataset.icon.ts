import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-dataset-icon',
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
  <path d="M320-280h80q17 0 28.5-11.5T440-320v-80q0-17-11.5-28.5T400-440h-80q-17 0-28.5 11.5T280-400v80q0 17 11.5 28.5T320-280Zm240 0h80q17 0 28.5-11.5T680-320v-80q0-17-11.5-28.5T640-440h-80q-17 0-28.5 11.5T520-400v80q0 17 11.5 28.5T560-280ZM320-520h80q17 0 28.5-11.5T440-560v-80q0-17-11.5-28.5T400-680h-80q-17 0-28.5 11.5T280-640v80q0 17 11.5 28.5T320-520Zm240 0h80q17 0 28.5-11.5T680-560v-80q0-17-11.5-28.5T640-680h-80q-17 0-28.5 11.5T520-640v80q0 17 11.5 28.5T560-520ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
</svg>`,
})
export class MsrfDatasetIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
