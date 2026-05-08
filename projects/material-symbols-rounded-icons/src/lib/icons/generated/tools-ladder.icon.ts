import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tools-ladder-icon',
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
  <path d="M238-120q-19 0-30-15.5t-6-33.5l178-643q4-13 14-20.5t23-7.5q20 0 31 15.5t6 33.5l-20 71h225l25-92q4-13 14.5-20.5T722-840q19 0 30 15.5t6 33.5L580-148q-4 13-14 20.5t-23 7.5q-20 0-31-15.5t-6-33.5l20-71H301l-25 92q-4 13-14.5 20.5T238-120Zm141-400h224l33-120H412l-33 120Zm-55 200h224l33-120H357l-33 120Z"/>
</svg>`,
})
export class MsrToolsLadderIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
