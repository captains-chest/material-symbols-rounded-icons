import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-add-row-above-icon',
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
  <path d="M480-640q-17 0-28.5-11.5T440-680v-40h-40q-17 0-28.5-11.5T360-760q0-17 11.5-28.5T400-800h40v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40h40q17 0 28.5 11.5T600-760q0 17-11.5 28.5T560-720h-40v40q0 17-11.5 28.5T480-640ZM200-80q-33 0-56.5-23.5T120-160v-240h720v240q0 33-23.5 56.5T760-80H200Zm-80-400v-240q0-33 23.5-56.5T200-800h44q16 0 26.5 12t9.5 28q0 83 58 141.5T480-560q84 0 142-58.5T680-760q0-16 10-28t26-12h44q33 0 56.5 23.5T840-720v240H120Z"/>
</svg>`,
})
export class MsrfAddRowAboveIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
