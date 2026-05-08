import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-timer-1-icon',
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
  <path d="M540-200q-25 0-42.5-17.5T480-260v-380H380q-25 0-42.5-17.5T320-700q0-25 17.5-42.5T380-760h140q33 0 56.5 23.5T600-680v420q0 25-17.5 42.5T540-200Z"/>
</svg>`,
})
export class MsrTimer1IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
