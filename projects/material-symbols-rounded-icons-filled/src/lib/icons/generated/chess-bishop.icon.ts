import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chess-bishop-icon',
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
  <path d="M240-80q-33 0-56.5-23.5T160-160v-76q0-21 9-39.5t26-31.5q43-35 77.5-78.5T330-480h-50q-17 0-28.5-11.5T240-520q0-17 11.5-28.5T280-560h32l-40-66q-14-23-11-50.5t23-47.5l168-168q12-12 28-12t28 12l168 168q20 20 23 47.5T688-626l-40 66h32q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480h-50q23 51 57.5 94.5T765-307q16 14 25.5 32t9.5 39v76q0 33-23.5 56.5T720-80H240Zm240-560q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720q-17 0-28.5 11.5T440-680q0 17 11.5 28.5T480-640Z"/>
</svg>`,
})
export class MsrfChessBishopIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
