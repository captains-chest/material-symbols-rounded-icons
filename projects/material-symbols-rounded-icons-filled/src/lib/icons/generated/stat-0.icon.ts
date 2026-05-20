import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stat-0-icon',
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
  <path d="M423-257 257-423q-12-12-18-27t-6-30q0-15 6-30t18-27l166-166q12-12 27-18t30-6q15 0 30 6t27 18l166 166q12 12 18 27t6 30q0 15-6 30t-18 27L537-257q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z"/>
</svg>`,
})
export class MsrfStat0IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
