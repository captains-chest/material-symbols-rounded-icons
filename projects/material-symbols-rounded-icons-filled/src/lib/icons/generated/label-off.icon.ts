import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-label-off-icon',
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
  <path d="M733-358q-8 0-15.5-3t-13.5-9L382-692q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h189q20 0 37 8.5t29 25.5l141 200q8 11 11.5 22.5T822-480q0 12-3.5 23.5T807-434l-42 59q-6 8-14.5 12.5T733-358ZM200-200q-33 0-56.5-23.5T120-280v-400q0-11 2.5-20t7.5-18l-46-46q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L638-210q-9 5-18 7.5t-20 2.5H200Z"/>
</svg>`,
})
export class MsrfLabelOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
