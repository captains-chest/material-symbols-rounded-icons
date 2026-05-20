import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-google-plus-reshare-icon',
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
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M4 19q-.425 0-.712-.288Q3 18.425 3 18v-3q0-2.075 1.463-3.538Q5.925 10 8 10h9.2l-2.925-2.925Q14 6.8 14 6.4t.3-.7q.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.625 4.625Q15.4 16.6 15 16.6t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.9-2.9H8q-1.25 0-2.125.875T5 15v3q0 .425-.287.712Q4.425 19 4 19Z"/>
</svg>`,
})
export class MsrfGooglePlusReshareIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
