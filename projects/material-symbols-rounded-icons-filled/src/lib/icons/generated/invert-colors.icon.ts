import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-invert-colors-icon',
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
  <path d="M480-120q-133 0-226.5-92T160-435q0-66 25-122.5T254-658l184-181q9-8 20-12.5t22-4.5q11 0 22 4.5t20 12.5l184 181q44 44 69 100.5T800-435q0 131-93.5 223T480-120Zm0-80v-568L310-600q-35 33-52.5 75T240-435q0 97 70 166t170 69Z"/>
</svg>`,
})
export class MsrfInvertColorsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
