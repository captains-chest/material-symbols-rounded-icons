import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-line-end-arrow-icon',
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
  <path d="M501-239q-20 13-40.5 1.5T440-273v-167H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-167q0-24 20.5-35.5T501-721l326 207q19 12 19 34t-19 34L501-239Z"/>
</svg>`,
})
export class MsrfLineEndArrowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
