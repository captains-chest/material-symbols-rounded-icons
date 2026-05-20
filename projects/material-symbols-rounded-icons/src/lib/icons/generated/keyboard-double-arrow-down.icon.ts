import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-keyboard-double-arrow-down-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m480-313 156-155q11-11 27.5-11.5T692-468q11 11 11 28t-11 28L508-228q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L268-412q-11-11-11.5-27.5T268-468q11-11 28-11t28 11l156 155Zm0-240 156-155q11-11 27.5-11.5T692-708q11 11 11 28t-11 28L508-468q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L268-652q-11-11-11.5-27.5T268-708q11-11 28-11t28 11l156 155Z"/>
</svg>`,
})
export class MsrKeyboardDoubleArrowDownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
