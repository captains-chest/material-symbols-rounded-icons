import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-emergency-icon',
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
  <path d="M410-190v-168l-146 84q-25 14-53 7t-42-33q-14-25-7-53t32-42l146-85-146-84q-25-14-32-42.5t7-53.5q14-25 42-32t53 7l146 84v-169q0-29 20.5-49.5T480-840q29 0 49.5 20.5T550-770v169l146-84q25-14 53-7t42 32q14 25 6.5 53.5T765-564l-145 84 146 85q25 14 32 42t-7 54q-14 25-42 32t-53-7l-146-84v168q0 29-20.5 49.5T480-120q-29 0-49.5-20.5T410-190Z"/>
</svg>`,
})
export class MsrfEmergencyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
