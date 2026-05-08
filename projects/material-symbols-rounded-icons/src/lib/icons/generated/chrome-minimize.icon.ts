import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-chrome-minimize-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M200 896q-17 0-28.5-11.5T160 856q0-17 11.5-28.5T200 816h560q17 0 28.5 11.5T800 856q0 17-11.5 28.5T760 896H200Z"/>
</svg>`,
})
export class MsrChromeMinimizeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
