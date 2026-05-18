import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-grid-4x4-icon',
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
  <path d="M200-200h-80q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h80v-160h-80q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h80v-160h-80q-17 0-28.5-11.5T80-720q0-17 11.5-28.5T120-760h80v-80q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v80h160v-80q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v80h160v-80q0-17 11.5-28.5T720-880q17 0 28.5 11.5T760-840v80h80q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680h-80v160h80q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-80v160h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-80H520v80q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-80H280v80q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-80Zm80-80h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160Z"/>
</svg>`,
})
export class MsrfGrid4x4IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
