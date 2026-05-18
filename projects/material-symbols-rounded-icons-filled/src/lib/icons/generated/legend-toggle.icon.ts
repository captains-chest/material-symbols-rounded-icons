import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-legend-toggle-icon',
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
  <path d="M200-280h560q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280Zm0-160h560q17 0 28.5 11.5T800-400q0 17-11.5 28.5T760-360H200q-17 0-28.5-11.5T160-400q0-17 11.5-28.5T200-440Zm-21-186 176-107q20-13 44-12t44 15l157 112 137-97q20-14 41.5-3.5T800-683q0 10-4.5 19T783-650l-137 97q-21 15-46 15t-46-15L397-664 221-557q-20 12-40.5.5T160-591q0-11 5-20.5t14-14.5Z"/>
</svg>`,
})
export class MsrfLegendToggleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
