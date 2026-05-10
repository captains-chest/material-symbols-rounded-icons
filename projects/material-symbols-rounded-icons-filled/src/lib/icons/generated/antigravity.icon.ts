import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-antigravity-icon',
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
  <path d="M481-880q81 0 126.5 61T685-680q26 63 50 140t51 155q26 75 57 141t72 113q8 9 7 21t-9 21q-8 9-19 10t-22-7q-79-62-130-138.5T639-358q-34-38-72.5-60T481-440q-47 0-85.5 22T323-358q-52 57-103 133.5T90-86q-11 8-22 7T49-89q-8-9-9-21t7-21q41-47 72-113t57-141q27-78 51-155t50-140q32-78 77.5-139T481-880Z"/>
</svg>`,
})
export class MsrfAntigravityIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
