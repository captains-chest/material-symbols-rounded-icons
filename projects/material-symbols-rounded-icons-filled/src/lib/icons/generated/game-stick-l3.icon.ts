import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-game-stick-l3-icon',
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
  <path d="M480-760 360-920h240L480-760Zm200 494v106q0 33-23.5 56.5T600-80H360q-33 0-56.5-23.5T280-160v-106q-91-32-145.5-87.5T80-477q0-101 116.5-172T480-720q167 0 283.5 71T880-477q0 68-54.5 123.5T680-266ZM451-380h91q8 0 13-5t5-13q0-8-5-13t-13-5h-71v-144q0-8-6-14t-14-6q-8 0-14 6t-6 14v160q0 8 6 14t14 6Z"/>
</svg>`,
})
export class MsrfGameStickL3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
