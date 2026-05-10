import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-highlight-icon',
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
  <path d="m198-667-30-29q-12-11-11.5-27.5T168-752q12-12 28.5-12.5T225-753l29 29q11 11 11.5 27.5T254-668q-11 11-27.5 11.5T198-667Zm242-133v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40q0 17-11.5 28.5T480-760q-17 0-28.5-11.5T440-800Zm268 75 28-28q11-11 27.5-11t28.5 12q11 11 11 28t-11 28l-28 28q-11 11-27.5 11.5T708-667q-12-12-12-29t12-29ZM360-160v-120l-97-97q-11-11-17-25.5t-6-30.5v-87q0-33 23.5-56.5T320-600h320q33 0 56.5 23.5T720-520v87q0 16-6 30.5T697-377l-97 97v120q0 33-23.5 56.5T520-80h-80q-33 0-56.5-23.5T360-160Z"/>
</svg>`,
})
export class MsrfHighlightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
