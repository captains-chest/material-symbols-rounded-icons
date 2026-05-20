import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-1k-icon',
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
  <path d="m540-450 62 79q2 3 22 11 17 0 25-15.5t-3-29.5l-56-75 57-76q11-14 3-29t-26-15q-7 0-12.5 3t-9.5 8l-62 79v-60q0-13-8.5-21.5T510-600q-13 0-21.5 8.5T480-570v180q0 13 8.5 21.5T510-360q13 0 21.5-8.5T540-390v-60Zm-200-90v150q0 13 8.5 21.5T370-360q13 0 21.5-8.5T400-390v-180q0-13-8.5-21.5T370-600h-60q-13 0-21.5 8.5T280-570q0 13 8.5 21.5T310-540h30ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
</svg>`,
})
export class Msrf1kIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
