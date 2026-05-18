import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-settings-input-component-icon',
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
  <path d="M120-40v-168q-35-12-57.5-42.5T40-320v-80h240v80q0 39-22.5 69.5T200-208v168h-80Zm320 0v-168q-35-12-57.5-42.5T360-320v-80h240v80q0 39-22.5 69.5T520-208v168h-80Zm320 0v-168q-35-12-57.5-42.5T680-320v-80h240v80q0 39-22.5 69.5T840-208v168h-80ZM40-480v-200q0-17 11.5-28.5T80-720h40v-160q0-17 11.5-28.5T160-920q17 0 28.5 11.5T200-880v160h40q17 0 28.5 11.5T280-680v200H40Zm320 0v-200q0-17 11.5-28.5T400-720h40v-160q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v160h40q17 0 28.5 11.5T600-680v200H360Zm320 0v-200q0-17 11.5-28.5T720-720h40v-160q0-17 11.5-28.5T800-920q17 0 28.5 11.5T840-880v160h40q17 0 28.5 11.5T920-680v200H680Z"/>
</svg>`,
})
export class MsrfSettingsInputComponentIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
