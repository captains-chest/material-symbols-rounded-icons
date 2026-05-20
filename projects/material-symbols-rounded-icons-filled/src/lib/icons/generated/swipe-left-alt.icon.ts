import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-swipe-left-alt-icon',
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
  <path d="M600-280q-73 0-127.5-45.5T404-440H233l36 36q11 11 11 27.5T268-348q-11 11-28 11t-28-11L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T268-555l-35 35h171q14-69 68.5-114.5T600-680q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Z"/>
</svg>`,
})
export class MsrfSwipeLeftAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
