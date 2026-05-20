import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-ink-highlighter-icon',
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
  <path d="m384-560 216 216-200 200q-24 24-56 24t-56-24l-2-2-3 3q-11 11-25.5 17t-30.5 6H108q-14 0-19-12t5-22l92-92-2-2q-24-24-24-56t24-56l200-200Zm57-57 199-199q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L657-401 441-617Z"/>
</svg>`,
})
export class MsrfInkHighlighterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
