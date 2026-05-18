import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-outpatient-icon',
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
  <path d="M80-120q-17 0-28.5-11.5T40-160v-640q0-17 11.5-28.5T80-840h480q17 0 28.5 11.5T600-800v640q0 17-11.5 28.5T560-120H400v-200H240v200H80Zm120-320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm280 120q0-17 11.5-28.5T680-520h87l-16-16q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l84 84q12 12 12 28t-12 28l-84 84q-11 11-27.5 11.5T752-368q-11-11-11.5-27.5T751-424l16-16h-87q-17 0-28.5-11.5T640-480Z"/>
</svg>`,
})
export class MsrfOutpatientIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
