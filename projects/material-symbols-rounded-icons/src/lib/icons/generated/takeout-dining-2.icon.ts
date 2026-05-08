import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-takeout-dining-2-icon',
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
  <path d="M171-80q-20 0-32-15.5t-7-34.5l150-600-2-28q-1-17-12-29.5T240-800q-17 0-28.5 11.5T200-760v40q0 17-11.5 28.5T160-680q-17 0-28.5-11.5T120-720v-40q0-50 35-85t85-35h442q48 0 82.5 32.5T802-767l36 645q1 17-11 29.5T798-80H171Zm53-80h93l-19-304-74 304Zm174 0h358l-34-602q-1-16-12.5-27T682-800H353q4 10 5 19.5t2 20.5l38 600Zm152-80q13 0 21.5-8.5T580-270v-130q26-6 43-27.5t17-49.5v-143q0-8-6-14t-14-6q-8 0-14 6t-6 14v131h-30v-131q0-8-6-14t-14-6q-8 0-14 6t-6 14v131h-30v-131q0-8-6-14t-14-6q-8 0-14 6t-6 14v143q0 28 17 49.5t43 27.5v130q0 13 8.5 21.5T550-240Zm-152 80h358-358Z"/>
</svg>`,
})
export class MsrTakeoutDining2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
