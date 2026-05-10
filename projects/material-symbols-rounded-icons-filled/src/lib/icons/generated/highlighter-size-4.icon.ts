import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-highlighter-size-4-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M353-127 127-353q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t27.5 12l227 226q12 12 12 28.5T833-550L410-127q-12 12-28.5 12T353-127Z"/>
</svg>`,
})
export class MsrfHighlighterSize4IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
