import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-new-window-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200q17 0 28.5 11.5T440-800q0 17-11.5 28.5T400-760H200v560h560v-200q0-17 11.5-28.5T800-440q17 0 28.5 11.5T840-400v200q0 33-23.5 56.5T760-120H200Zm440-520h-80q-17 0-28.5-11.5T520-680q0-17 11.5-28.5T560-720h80v-80q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v80h80q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640h-80v80q0 17-11.5 28.5T680-520q-17 0-28.5-11.5T640-560v-80Z"/>
</svg>`,
})
export class MsrfNewWindowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
