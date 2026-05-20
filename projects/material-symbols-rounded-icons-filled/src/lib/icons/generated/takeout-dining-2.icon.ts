import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-takeout-dining-2-icon',
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
  <path d="M171-80q-20 0-32-15.5t-7-34.5l150-600-2-28q-1-17-12-29.5T240-800q-17 0-28.5 11.5T200-760v40q0 17-11.5 28.5T160-680q-17 0-28.5-11.5T120-720v-40q0-50 35-85t85-35h442q48 0 82.5 32.5T802-767l36 645q1 17-11 29.5T798-80H171Zm53-80h93l-19-304-74 304Zm326-80q13 0 21.5-8.5T580-270v-130q26-6 43-27.5t17-49.5v-143q0-8-6-14t-14-6q-8 0-14 6t-6 14v131h-30v-131q0-8-6-14t-14-6q-8 0-14 6t-6 14v131h-30v-131q0-8-6-14t-14-6q-8 0-14 6t-6 14v143q0 28 17 49.5t43 27.5v130q0 13 8.5 21.5T550-240Z"/>
</svg>`,
})
export class MsrfTakeoutDining2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
