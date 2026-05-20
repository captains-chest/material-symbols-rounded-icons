import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-wrist-icon',
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
  <path d="M244-280H80q-17 0-28.5-11.5T40-320v-320q0-17 11.5-28.5T80-680h144l44-45q17-17 39-26t46-9h407q17 0 28.5 11.5T800-720q0 17-11.5 28.5T760-680H560v60h280q17 0 28.5 11.5T880-580q0 17-11.5 28.5T840-540H560v60h320q17 0 28.5 11.5T920-440q0 17-11.5 28.5T880-400H560v60h240q17 0 28.5 11.5T840-300q0 17-11.5 28.5T800-260H485l6 12q17 35 10.5 72.5T468-111q-12 11-28 11t-27-11L244-280Z"/>
</svg>`,
})
export class MsrfWristIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
