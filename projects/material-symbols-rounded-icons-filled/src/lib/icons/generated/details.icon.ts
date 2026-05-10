import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-details-icon',
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
  <path d="M148-120q-23 0-34.5-19.5T113-179l332-598q11-20 35-20t35 20l332 598q11 20-.5 39.5T812-120H148Zm68-80h224v-403L216-200Zm304 0h224L520-603v403Z"/>
</svg>`,
})
export class MsrfDetailsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
