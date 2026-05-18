import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-format-letter-spacing-wide-icon',
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
  <path d="M160-160q-17 0-28.5-11.5T120-200v-560q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v560q0 17-11.5 28.5T160-160Zm640 0q-17 0-28.5-11.5T760-200v-560q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v560q0 17-11.5 28.5T800-160ZM341-280q-17 0-27-14t-4-30l126-334q4-10 12-16t19-6h26q11 0 19 6t12 16l126 335q6 16-3.5 29.5T620-280q-11 0-19-6t-12-16l-28-80H399l-29 81q-3 10-11 15.5t-18 5.5Zm79-160h120l-58-166h-4l-58 166Z"/>
</svg>`,
})
export class MsrfFormatLetterSpacingWideIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
