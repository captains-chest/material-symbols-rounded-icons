import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-done-outline-icon',
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
  <path d="m381-240 424-424-57-56-368 367-169-170-57 57 227 226Zm-57 56L98-410q-12-12-17.5-26.5T75-466q0-15 5.5-30T98-523l56-56q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l113 113 310-311q11-12 26-17.5t30-5.5q15 0 30 5.5t27 16.5l57 56q12 12 18 26.5t6 30.5q0 16-5.5 30.5T862-608L438-184q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z"/>
</svg>`,
})
export class MsrfDoneOutlineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
