import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-highlighter-size-5-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M410-70 70-410q-11-11-11-28t11-28l424-424q11-11 27.5-11t28.5 12l340 339q11 11 11 28t-11 28L466-70q-11 11-28 11t-28-11Z"/>
</svg>`,
})
export class MsrHighlighterSize5IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
