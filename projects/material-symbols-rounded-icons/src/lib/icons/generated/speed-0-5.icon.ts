import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-speed-0-5-icon',
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
  <path d="M440-280q-17 0-28.5-11.5T400-320q0-17 11.5-28.5T440-360h120v-80H440q-17 0-28.5-11.5T400-480v-160q0-17 11.5-28.5T440-680h160q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H480v80h80q33 0 56.5 23.5T640-440v80q0 33-23.5 56.5T560-280H440Zm-120 0q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360q17 0 28.5 11.5T360-320q0 17-11.5 28.5T320-280Z"/>
</svg>`,
})
export class MsrSpeed05IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
