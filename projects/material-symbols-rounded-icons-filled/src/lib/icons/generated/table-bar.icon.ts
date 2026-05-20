import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-table-bar-icon',
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
  <path d="m260-211 40-99q9-23 29-36.5t45-13.5h66v-161q-153-5-256.5-45T80-660q0-58 117-99t283-41q167 0 283.5 41T880-660q0 54-103.5 94T520-521v161h66q24 0 44.5 13.5T660-310l40 99q8 18-3.5 34.5T665-160q-11 0-20-6t-14-17l-39-97H368l-39 97q-5 11-14 17t-20 6q-20 0-31.5-16.5T260-211Z"/>
</svg>`,
})
export class MsrfTableBarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
