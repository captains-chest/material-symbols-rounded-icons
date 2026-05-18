import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tatami-seat-icon',
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
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M280-120q-38 0-71.5-17T152-184q-23-30-30-67.5t4-73.5l24-82-28-387q-2-17 9.5-29t28.5-14l40-3q66-5 115.5 39T370-691l9 119q5 66-38.5 116T231-401l-28 98q-5 18-1.5 37t14.5 34q5 6 11 11t14 10q5-63 50.5-106T400-360h280q66 0 113 47t47 113v40q0 17-11.5 28.5T800-120H280Z"/>
</svg>`,
})
export class MsrfTatamiSeatIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
