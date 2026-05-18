import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-soup-kitchen-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M390-80q-101 0-177.5-67.5T120-315q-2-18 10-31.5t30-13.5h421l44-414q5-45 38.5-75.5T744-880q50 0 85 35t35 85v10q0 17-11.5 28.5T824-710q-17 0-28.5-11.5T784-750v-10q0-17-11.5-28.5T744-800q-16 0-27 10.5T704-764l-46 435q-11 106-87 177.5T390-80ZM247-420q-17 0-24-9.5t-5-25.5q1-9 1.5-14.5t.5-10.5q0-30-20-76t-20-69q0-9 1-18.5t6-18.5q4-8 11-13t15-5q16 0 24.5 9.5T242-645q-2 9-2 20 0 23 20 69t20 76q0 15-2 25t-5 17q-4 8-11 13t-15 5Zm260 0q-17 0-24-9.5t-5-25.5q1-9 1.5-14.5t.5-10.5q0-30-20-76t-20-69q0-9 1-18.5t6-18.5q4-8 11-13t15-5q16 0 24.5 9.5T502-645q-2 9-2 20 0 23 20 69t20 76q0 15-2 25t-5 17q-4 8-11 13t-15 5Zm-130 0q-17 0-24-9.5t-5-25.5q1-9 1.5-14.5t.5-10.5q0-30-20-76t-20-69q0-9 1-18.5t6-18.5q4-8 11-13t15-5q16 0 24.5 9.5T372-645q-2 9-2 20 0 23 20 69t20 76q0 15-2 25t-5 17q-4 8-11 13t-15 5Z"/>
</svg>`,
})
export class MsrfSoupKitchenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
