import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-horizontal-align-right-icon',
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
  <path d="M771.5-171.5Q760-183 760-200v-560q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v560q0 17-11.5 28.5T800-160q-17 0-28.5-11.5ZM528-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h368l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l144 144q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-308q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76Z"/>
</svg>`,
})
export class MsrHorizontalAlignRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
