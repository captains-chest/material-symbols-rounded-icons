import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-align-horizontal-right-icon',
  standalone: true,
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80ZM380-280q-25 0-42.5-17.5T320-340q0-25 17.5-42.5T380-400h280q25 0 42.5 17.5T720-340q0 25-17.5 42.5T660-280H380ZM140-560q-25 0-42.5-17.5T80-620q0-25 17.5-42.5T140-680h520q25 0 42.5 17.5T720-620q0 25-17.5 42.5T660-560H140Z"/>
</svg>`,
})
export class MsrAlignHorizontalRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
