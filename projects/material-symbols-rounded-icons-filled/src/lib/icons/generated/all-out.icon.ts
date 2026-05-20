import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-all-out-icon',
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
  <path d="M280-120h-80q-33 0-56.5-23.5T120-200v-80q0-17 11.5-28.5T160-320q17 0 28.5 11.5T200-280v80h80q17 0 28.5 11.5T320-160q0 17-11.5 28.5T280-120Zm480 0h-80q-17 0-28.5-11.5T640-160q0-17 11.5-28.5T680-200h80v-80q0-17 11.5-28.5T800-320q17 0 28.5 11.5T840-280v80q0 33-23.5 56.5T760-120Zm-280-80q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82ZM120-760q0-33 23.5-56.5T200-840h80q17 0 28.5 11.5T320-800q0 17-11.5 28.5T280-760h-80v80q0 17-11.5 28.5T160-640q-17 0-28.5-11.5T120-680v-80Zm680 120q-17 0-28.5-11.5T760-680v-80h-80q-17 0-28.5-11.5T640-800q0-17 11.5-28.5T680-840h80q33 0 56.5 23.5T840-760v80q0 17-11.5 28.5T800-640Z"/>
</svg>`,
})
export class MsrfAllOutIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
