import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-device-band-icon',
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
  <path d="M400-80q-33 0-56.5-23.5T320-160v-440q-17 0-28.5-11.5T280-640v-40q0-17 11.5-28.5T320-720v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80q17 0 28.5 11.5T680-680v40q0 17-11.5 28.5T640-600v440q0 33-23.5 56.5T560-80H400Zm0-540v460h160v-460H400Zm0-80h160v-100H400v100Zm0 80h160-160Zm0-80h160-160Z"/>
</svg>`,
})
export class MsrDeviceBandIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
