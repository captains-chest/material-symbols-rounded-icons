import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-hand-left-off-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M847-56q-12 11-28 11.5T791-56l-33-33q-8 5-17.5 7T720-80H464l138-165-57-57-161 193q-11 14-27.5 21.5T322-80h-42q-50 0-85-35t-35-85v-320q0-34 17.5-62t45.5-43L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q12 12 11.5 28T847-56Zm-47-216L280-792v-8q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v528ZM540-680q17 0 28.5-11.5T580-720q0-17-11.5-28.5T540-760q-17 0-28.5 11.5T500-720q0 17 11.5 28.5T540-680ZM320-260l178-89-178-179v268Z"/>
</svg>`,
})
export class MsrfMobileHandLeftOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
