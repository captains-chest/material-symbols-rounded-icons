import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-child-friendly-icon',
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
  <path d="M340-80q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17Zm440 0q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17ZM540-656 384-844q36-18 78-27t90-9q41 0 79 9t70 27q11 8 13 21.5t-9 22.5L540-656Zm-420-44q-17 0-28.5-11.5T80-740q0-57 39.5-98.5T216-880q30 0 55 14t51 44l428 516q17 20 6.5 43T720-240H480q-83 0-141.5-58.5T280-440v-308l-20-24q-14-17-23.5-22.5T216-800q-24 0-40 18t-16 42q0 17-11.5 28.5T120-700Z"/>
</svg>`,
})
export class MsrfChildFriendlyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
