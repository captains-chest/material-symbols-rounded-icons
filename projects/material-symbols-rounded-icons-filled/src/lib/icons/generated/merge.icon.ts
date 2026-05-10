import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-merge-icon',
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
  <path d="M480-344 284-148q-11 11-27.5 11.5T228-148q-11-11-11-28t11-28l165-166q23-23 35-52t12-61v-204l-36 36q-11 11-27.5 11T348-652q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11.5 27.5T612-652q-11 11-28 11t-28-11l-36-35v204q0 32 12 61t35 52l165 166q11 11 11.5 27.5T732-148q-11 11-28 11t-28-11L480-344Z"/>
</svg>`,
})
export class MsrfMergeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
