import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-performance-max-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm240-266 118 118q12 12 28 12t28-12l158-158q11-11 11-27.5T732-522q-12-12-28.5-12T675-522L546-393 428-511q-12-12-28-12t-28 12L228-367q-11 11-11 27.5t11 28.5q12 12 28.5 12t28.5-12l115-115Zm122-136 19 42q3 6 9 6t9-6l19-42 42-19q6-3 6-9t-6-9l-42-19-19-42q-3-6-9-6t-9 6l-19 42-42 19q-6 3-6 9t6 9l42 19Z"/>
</svg>`,
})
export class MsrfPerformanceMaxIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
