import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-image-not-supported-icon',
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
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m19.775 22.6-1.6-1.6H5q-.825 0-1.413-.587Q3 19.825 3 19V5.8L1.4 4.2q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.3.3.288.7-.013.4-.313.7-.3.275-.7.287-.4.013-.7-.287ZM7 17h7.175l-2.325-2.325-.85 1.05-1.6-2.175q-.15-.2-.4-.2t-.4.2l-2 2.65q-.2.25-.05.525Q6.7 17 7 17Zm14 1.175L5.825 3H19q.825 0 1.413.587Q21 4.175 21 5Z"/>
</svg>`,
})
export class MsrfImageNotSupportedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
