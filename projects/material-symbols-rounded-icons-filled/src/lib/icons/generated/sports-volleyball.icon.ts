import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-sports-volleyball-icon',
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
  <path d="M864-592 520-791v-87q123 12 216 90.5T864-592ZM270-404v-416q39-23 82-38t89-20v375l-171 99Zm-154 89q-18-38-27-79.5T80-480q0-77 28-147.5T190-754v395l-74 44Zm176 187q-42-20-76-50t-60-68l325-188 171 99-360 207Zm189 48q-23 0-47-2.5T388-91l344-198 74 41q-57 78-142.5 123T481-80Zm364-236L520-503v-197l360 209q0 46-8 90t-27 85Z"/>
</svg>`,
})
export class MsrfSportsVolleyballIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
