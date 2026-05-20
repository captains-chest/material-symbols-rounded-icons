import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-ink-highlighter-off-icon',
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
  <path d="m752-816 104 104q24 24 24 56t-24 56L694-437q-12 12-29 12t-29-12L477-596q-12-12-12-29t12-29l163-162q24-24 56-24t56 24Zm69 731q-12 12-28.5 12T764-85L552-296 400-143q-24 24-56.5 24T287-143l-5 4q-11 9-24 14t-27 5H109q-14 0-19.5-12t4.5-22l92-91q-24-24-25-57.5t23-57.5l152-152L84-764q-12-12-12-28.5T84-821q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28Z"/>
</svg>`,
})
export class MsrfInkHighlighterOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
