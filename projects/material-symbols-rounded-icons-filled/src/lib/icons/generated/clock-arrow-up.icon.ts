import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-clock-arrow-up-icon',
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
  <path d="M340-180q-125 0-212.5-87.5T40-480q0-125 87.5-212.5T340-780q125 0 212.5 87.5T640-480q0 125-87.5 212.5T340-180Zm40-313v-107q0-17-11.5-28.5T340-640q-17 0-28.5 11.5T300-600v123q0 8 3 15.5t9 13.5l80 80q11 11 28 11t28-11q11-11 11-28t-11-28l-68-69Zm360-155-24 24q-11 11-28 11t-28-11q-11-11-11-28t11-28l92-92q12-12 28-12t28 12l92 92q11 12 11 28.5T899-624q-12 11-28.5 11.5T843-624l-23-23v447q0 17-11.5 28.5T780-160q-17 0-28.5-11.5T740-200v-448Z"/>
</svg>`,
})
export class MsrfClockArrowUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
