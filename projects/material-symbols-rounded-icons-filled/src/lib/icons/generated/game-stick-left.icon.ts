import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-game-stick-left-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M680-346v106q0 33-23.5 56.5T600-160H360q-33 0-56.5-23.5T280-240v-106q-91-32-145.5-87.5T80-557q0-101 116.5-172T480-800q167 0 283.5 71T880-557q0 68-54.5 123.5T680-346ZM471-496v-144q0-8-6-14t-14-6q-8 0-14 6t-6 14v160q0 8 6 14t14 6h91q8 0 13-5t5-13q0-8-5-13t-13-5h-71Z"/>
</svg>`,
})
export class MsrfGameStickLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
