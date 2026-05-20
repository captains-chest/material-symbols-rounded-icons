import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-match-case-off-icon',
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
  <path d="M182-252q-19 0-29.5-15.5T149-300l109-290L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L506-342l16 43q7 17-3.5 32T490-252q-11 0-20.5-6.5T456-276l-31-88H247l-32 89q-4 11-13 17t-20 6Zm127-287-39 111h131l-10-29-82-82Zm436 210q8-10 12-22t4-25q-14-8-33.5-12.5T689-393h-8l-45-45q10-2 20-3.5t21-1.5q23 0 45 4t38 11v-12q0-29-20.5-47T685-505q-16 0-29.5 5T630-487q-9 7-20.5 7t-20.5-8q-9-8-10-19.5t7-18.5q21-17 46-25.5t54-8.5q69 0 103 32.5t34 97.5v131q0 14-12 19t-22-5l-44-44Z"/>
</svg>`,
})
export class MsrfMatchCaseOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
