import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrow-downward-alt-icon',
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
  <path d="M440-392v-328q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v328l116-116q11-11 28-11t28 11q11 11 11 28t-11 28L508-268q-12 12-28 12t-28-12L268-452q-11-11-11-28t11-28q11-11 28-11t28 11l116 116Z"/>
</svg>`,
})
export class MsrfArrowDownwardAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
