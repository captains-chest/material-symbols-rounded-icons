import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-approval-delegation-off-icon',
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
  <path d="m557-631 199-198q11-11 27.5-11.5T812-829q11 11 11 28t-11 28L585-546q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L415-660q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l85 85ZM850-54q-11 11-28 11t-28-11L54-794q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28ZM80-160v-280q0-33 23.5-56.5T160-520q33 0 56.5 23.5T240-440v280q0 33-23.5 56.5T160-80q-33 0-56.5-23.5T80-160Zm240 1v-361h64q7 0 14 1.5t14 3.5l51 18 177 177h-73q-5 0-7.5-.5T553-323l-64-25q-8-3-15.5 1T463-335q-3 8 1 15.5t12 10.5l77 27q2 1 6 1.5t7 .5h114l123 123-177 68q-12 5-24.5 5.5T576-87l-256-72Z"/>
</svg>`,
})
export class MsrfApprovalDelegationOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
