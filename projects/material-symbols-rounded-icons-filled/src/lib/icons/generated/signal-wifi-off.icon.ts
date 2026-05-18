import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signal-wifi-off-icon',
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
  <path d="M717-374q-8 0-15-2.5t-13-8.5L341-732q-5-5-7.5-11.5T331-756q0-11 6.5-21t19.5-12q30-5 61-8t62-3q125 0 239.5 43.5T928-628q7 6 10 14t3 16q0 8-2.5 15t-8.5 13L745-385q-6 6-13 8.5t-15 2.5Zm74 317L604-244l-96 96q-12 12-28 12t-28-12L30-570q-12-12-12-30t13-29q26-23 53-43t55-36l-84-84q-12-12-11.5-28T56-848q12-12 28.5-12t28.5 12l735 735q12 12 12 28t-12 28q-12 12-28.5 12T791-57Z"/>
</svg>`,
})
export class MsrfSignalWifiOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
