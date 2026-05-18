import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-wrist-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M244-280H80q-17 0-28.5-11.5T40-320q0-17 11.5-28.5T80-360h163q16 0 30.5 6t25.5 17l115 114-30-59q-10-20 1.5-39t34.5-19h380q17 0 28.5 11.5T840-300q0 17-11.5 28.5T800-260H485l6 12q17 35 10.5 72.5T468-111q-12 11-28 11t-27-11L244-280ZM40-640q0-17 11.5-28.5T80-680h144l44-45q17-17 39-26t46-9h407q17 0 28.5 11.5T800-720q0 17-11.5 28.5T760-680H353q-8 0-15 3.5t-13 8.5l-46 45q-11 11-25.5 17t-30.5 6H80q-17 0-28.5-11.5T40-640Zm0 188Zm840 52H600q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480h280q17 0 28.5 11.5T920-440q0 17-11.5 28.5T880-400Zm-40-140H600q-17 0-28.5-11.5T560-580q0-17 11.5-28.5T600-620h240q17 0 28.5 11.5T880-580q0 17-11.5 28.5T840-540Z"/>
</svg>`,
})
export class MsrWristIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
