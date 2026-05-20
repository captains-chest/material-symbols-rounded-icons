import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-move-selection-down-icon',
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
  <path d="M320-80q-33 0-56.5-23.5T240-160v-320q0-33 23.5-56.5T320-560h320q33 0 56.5 23.5T720-480v320q0 33-23.5 56.5T640-80H320Zm360-560q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640Zm0-160q-17 0-28.5-11.5T640-840q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840q0 17-11.5 28.5T680-800Zm-200 0q-17 0-28.5-11.5T440-840q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800Zm-200 0q-17 0-28.5-11.5T240-840q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840q0 17-11.5 28.5T280-800Zm0 160q-17 0-28.5-11.5T240-680q0-17 11.5-28.5T280-720q17 0 28.5 11.5T320-680q0 17-11.5 28.5T280-640Z"/>
</svg>`,
})
export class MsrfMoveSelectionDownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
