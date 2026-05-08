import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-enterprise-off-icon',
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
  <path d="m792-56-64-64H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h80l80 80H160v440h487L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm88-584v350q0 20-12.5 30T840-250q-15 0-27.5-10.5T800-291v-349H467q-16 0-30.5-6T411-663l-68-68q-11-11-17-25.5t-6-30.5v-13q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640Zm-480-80h160v-80H400v80Zm217 263Zm-189 37Z"/>
</svg>`,
})
export class MsrEnterpriseOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
