import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-backlight-high-icon',
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
  <path d="M80-360q-17 0-28.5-11.5T40-400q0-17 11.5-28.5T80-440h80q17 0 28.5 11.5T200-400q0 17-11.5 28.5T160-360H80Zm202-238q-11 11-28 11t-28-11l-57-57q-11-11-11-27.5t11-28.5q12-12 28-12t28 12l57 57q11 11 11 28t-11 28Zm58 358q-25 0-42.5-17.5T280-300q0-25 17.5-42.5T340-360h280q25 0 42.5 17.5T680-300q0 25-17.5 42.5T620-240H340Zm140-440q-17 0-28.5-11.5T440-720v-120q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v120q0 17-11.5 28.5T480-680Zm198 82q-11-11-11-28t11-28l57-57q11-11 27.5-11t28.5 11q12 12 12 28t-12 28l-57 57q-11 11-28 11t-28-11Zm122 238q-17 0-28.5-11.5T760-400q0-17 11.5-28.5T800-440h80q17 0 28.5 11.5T920-400q0 17-11.5 28.5T880-360h-80Z"/>
</svg>`,
})
export class MsrfBacklightHighIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
