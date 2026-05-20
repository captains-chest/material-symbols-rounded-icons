import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-double-arrow-icon',
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
  <path d="M442-480 287-697q-14-20-3.5-41.5T319-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Zm238 0L525-697q-14-20-3.5-41.5T557-760q10 0 19 4.5t14 12.5l188 263-188 263q-5 8-14 12.5t-19 4.5q-24 0-35-21.5t3-41.5l155-217Z"/>
</svg>`,
})
export class MsrDoubleArrowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
