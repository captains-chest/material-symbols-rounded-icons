import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrow-range-icon',
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
  <path d="m233-440 75 75q11 12 11.5 28.5T308-308q-12 12-28 12t-28-12L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l144-144q12-12 28-12t28 12q12 12 12 28.5T308-595l-75 75h494l-75-75q-11-12-11.5-28.5T652-652q12-12 28-12t28 12l144 144q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L708-308q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l75-75H233Z"/>
</svg>`,
})
export class MsrfArrowRangeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
