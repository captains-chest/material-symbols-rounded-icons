import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-score-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-320v-100L520-300 388-432q-12-12-28-12t-28 12L200-300v100l160-160 132 132q12 12 28 12t28-12l212-212Zm-250-40q13 0 21.5-8.5T540-510v-180q0-13-8.5-21.5T510-720q-13 0-21.5 8.5T480-690v180q0 13 8.5 21.5T510-480Zm98-120 51-76q10-14 1.5-29T635-720q-7 0-13 3.5t-10 9.5l-72 107 72 107q4 6 10 9.5t13 3.5q17 0 25-15t-1-29l-51-76Zm-268 60v-30h70q13 0 21.5-8.5T440-600v-90q0-13-8.5-21.5T410-720H310q-13 0-21.5 8.5T280-690q0 13 8.5 21.5T310-660h70v30h-70q-13 0-21.5 8.5T280-600v90q0 13 8.5 21.5T310-480h100q13 0 21.5-8.5T440-510q0-13-8.5-21.5T410-540h-70Z"/>
</svg>`,
})
export class MsrfScoreIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
