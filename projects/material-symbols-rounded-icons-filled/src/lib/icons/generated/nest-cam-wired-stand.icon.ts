import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-cam-wired-stand-icon',
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
  <path d="M320-40q-17 0-28.5-11.5T280-80v-80q0-84 58.5-142T480-360q11 0 21 1t20 3l22-34-74-7q-97-10-163-82.5T240-650q0-99 65.5-171.5T469-904l165-16q35-3 61 21t26 59v379q0 35-26 59t-61 21h-1l-38 57q39 27 62 70t23 94v80q0 17-11.5 28.5T640-40H320Z"/>
</svg>`,
})
export class MsrfNestCamWiredStandIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
