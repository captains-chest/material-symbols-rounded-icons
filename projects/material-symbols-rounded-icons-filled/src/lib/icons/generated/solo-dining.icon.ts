import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-solo-dining-icon',
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
  <path d="M380-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-80q-17 0-28.5-11.5T40-120q0-17 11.5-28.5T80-160h40v-295q0-35 28.5-65t82.5-50q32-13 73-21.5t76-8.5q34 0 76.5 9t77.5 23q51 20 78.5 49.5T640-455v15q0 17-11.5 28.5T600-400h-80q-39 0-63.5 30.5T442-301l35 141h83q-1-3-1.5-5.5T557-171l-25-99q-5-19 7-34.5t32-15.5h298q20 0 32 15.5t7 34.5l-25 99q-1 3-1.5 5.5T880-160q17 0 28.5 11.5T920-120q0 17-11.5 28.5T880-80H80Z"/>
</svg>`,
})
export class MsrfSoloDiningIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
