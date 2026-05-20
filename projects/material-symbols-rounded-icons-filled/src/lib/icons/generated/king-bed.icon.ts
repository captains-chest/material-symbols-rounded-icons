import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-king-bed-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M80-481q0-33 23.5-56t56.5-23v-120q0-33 23.5-56.5T240-760h480q33 0 56.5 23.5T800-680v120q33 0 56.5 23.5T880-480v146q0 23-15.5 38.5T826-280l-22 67q-2 6-7 9.5t-11 3.5h-12q-6 0-11-3.5t-7-9.5l-22-67H226l-22 67q-2 6-7 9.5t-11 3.5h-12q-6 0-11-3.5t-7-9.5l-22-67q-23 0-38.5-15.5T80-334v-147Zm440-79h200v-120H520v120Zm-280 0h200v-120H240v120Z"/>
</svg>`,
})
export class MsrfKingBedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
