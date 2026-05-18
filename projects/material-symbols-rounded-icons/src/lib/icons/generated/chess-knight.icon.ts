import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-chess-knight-icon',
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
  <path d="M280-80q-33 0-56.5-23.5T200-160v-80q0-23 12-41.5t32-29.5l196-99v-70l-139 69q-12 6-25 9t-26 3q-31 0-58.5-16T149-461q-14-27-12-57.5t19-56.5l124-185-39-58q-14-20-2-41t36-21h165q133 0 226.5 93T760-560v400q0 33-23.5 56.5T680-80H280Zm0-80h400v-400q0-100-70-170t-170-70h-90l12 18q7 10 7 22t-7 22L223-530q-5 8-5.5 16.5T221-497q5 11 13.5 14.5T251-479q3 0 15-3l196-99q20-10 39 1.5t19 34.5v136q0 23-12 41.5T476-338l-196 98v80Zm160-320Z"/>
</svg>`,
})
export class MsrChessKnightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
