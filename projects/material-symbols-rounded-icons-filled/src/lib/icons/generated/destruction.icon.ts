import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-destruction-icon',
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
  <path d="M200-80q-33 0-56.5-23.5T120-160v-160q0-33 23.5-56.5T200-400h560q33 0 56.5 23.5T840-320v160q0 33-23.5 56.5T760-80H200Zm92-380q-16 0-30-3.5T234-475l-101-57q-9-5-12.5-14t-1.5-18q2-9 7.5-15.5T143-588l157-26-42-154q-3-11 0-19.5t11-13.5q8-5 17-5t18 6l130 92 78-138q5-9 14-13t18-2q9 2 15.5 7.5T568-837l26 157 154-42q11-3 19.5 0t13.5 11q5 8 5 17t-6 18l-92 130 20 11q27 15 19 45t-39 30H292Z"/>
</svg>`,
})
export class MsrfDestructionIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
