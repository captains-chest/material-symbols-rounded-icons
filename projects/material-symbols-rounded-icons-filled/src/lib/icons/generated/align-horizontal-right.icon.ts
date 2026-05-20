import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-align-horizontal-right-icon',
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
  <path d="M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80ZM380-280q-25 0-42.5-17.5T320-340q0-25 17.5-42.5T380-400h280q25 0 42.5 17.5T720-340q0 25-17.5 42.5T660-280H380ZM140-560q-25 0-42.5-17.5T80-620q0-25 17.5-42.5T140-680h520q25 0 42.5 17.5T720-620q0 25-17.5 42.5T660-560H140Z"/>
</svg>`,
})
export class MsrfAlignHorizontalRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
