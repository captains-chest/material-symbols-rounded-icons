import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-elevation-icon',
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
  <path d="M760-120H160q-25 0-35.5-21.5T128-183l188-264q11-16 28-24.5t37-8.5h161l228-266q18-21 44-11.5t26 37.5v520q0 33-23.5 56.5T760-120ZM300-560 176-385q-10 14-26 16.5t-30-7.5q-14-10-16.5-26t7.5-30l125-174q11-16 28-25t37-9h161l162-189q11-13 27-14t29 10q13 11 14 27t-10 29L522-588q-11 14-27 21t-33 7H300Z"/>
</svg>`,
})
export class MsrfElevationIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
