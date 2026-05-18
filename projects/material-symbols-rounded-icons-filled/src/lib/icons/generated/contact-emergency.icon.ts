import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-contact-emergency-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M0-120v-720h960v720H0Zm360-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM84-200h552q-42-75-116-117.5T360-360q-86 0-160 42.5T84-200Zm606-348v38q0 13 8.5 21.5T720-480q13 0 21.5-8.5T750-510v-38l33 19q11 6 23 3t18-14q6-11 3-23t-14-18l-33-19 33-19q11-6 14-18t-3-23q-6-11-18-14t-23 3l-33 19v-38q0-13-8.5-21.5T720-720q-13 0-21.5 8.5T690-690v38l-33-19q-11-6-23-3t-18 14q-6 11-3 23t14 18l33 19-33 19q-11 6-14 18t3 23q6 11 18 14t23-3l33-19Z"/>
</svg>`,
})
export class MsrfContactEmergencyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
