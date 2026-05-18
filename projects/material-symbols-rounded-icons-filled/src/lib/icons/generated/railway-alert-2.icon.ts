import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-railway-alert-2-icon',
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
  <path d="M128-80q-14 0-19-12t5-22l46-46h480l46 46q10 10 5 22t-19 12H128Zm552-400q-83 0-141.5-58.5T480-680q0-83 58.5-141.5T680-880q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-200l40-40h-20q-58 0-99-41t-41-99v-260q0-122 96-201t224-79q13 0 25.5.5T451-917q18 2 24 20.5t-8 32.5q-26 31-43 67.5T402-720H177q-9 19-13 39t-4 41v40h252q13 43 38.5 79.5T512-457q35 27 77.5 41.5T677-400q19 0 31 13t10 30q-8 51-47.5 84T580-240h-20l40 40H200Zm200-160q25 0 42.5-17.5T460-420q0-25-17.5-42.5T400-480q-25 0-42.5 17.5T340-420q0 25 17.5 42.5T400-360Z"/>
</svg>`,
})
export class MsrfRailwayAlert2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
