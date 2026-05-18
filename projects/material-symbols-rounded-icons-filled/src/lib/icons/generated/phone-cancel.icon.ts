import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-phone-cancel-icon',
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
  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 3 23 14t9 24v162q0 18-12 30t-30 12Zm-98-523-56 55q-11 11-27.5 11.5T588-588q-11-11-11-28t11-28l55-56-55-55q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l55 55 55-56q11-12 27.5-12t28.5 12q12 12 12 28.5T811-755l-55 55 56 56q12 12 11.5 28T811-588q-12 11-28 11.5T755-588l-55-55Z"/>
</svg>`,
})
export class MsrfPhoneCancelIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
