import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-exercise-icon',
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
  <path d="M839-599 597-841l17-17q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857-615l-18 16ZM346-104q-23 23-56.5 23T233-104L104-233q-23-23-23-56.5t23-56.5l16-16 242 242-16 16Zm145-28q-12 12-28 12t-28-12L132-435q-12-12-12-28t12-28l57-58q12-12 28.5-12t28.5 12l63 63 166-166-63-63q-12-12-12-28t12-28l57-58q12-12 28.5-12t28.5 12l303 303q12 12 12 28.5T829-469l-58 57q-12 12-28 12t-28-12l-63-63-166 166 63 63q12 12 12 28.5T549-189l-58 57Z"/>
</svg>`,
})
export class MsrfExerciseIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
