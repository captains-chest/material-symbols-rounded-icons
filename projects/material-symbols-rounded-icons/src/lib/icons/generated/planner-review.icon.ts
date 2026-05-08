import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-planner-review-icon',
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
  <path d="m208-320 106-490q3-14 13.5-22t24.5-8h17q14 0 24.5 8.5T407-809l115 541 71-302q3-13 13.5-21.5T631-600h19q14 0 24 8t13 21l65 251h88q17 0 28.5 11.5T880-280q0 17-11.5 28.5T840-240H721q-14 0-24.5-8T682-270l-40-158-75 318q-3 14-13.5 22T529-80h-17q-14 0-25-8.5T473-111L360-642l-81 371q-3 14-14 22.5t-25 8.5H120q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320h88Z"/>
</svg>`,
})
export class MsrPlannerReviewIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
