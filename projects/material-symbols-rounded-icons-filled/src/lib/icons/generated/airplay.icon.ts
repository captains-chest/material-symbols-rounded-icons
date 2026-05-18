import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-airplay-icon',
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
  <path d="M312-120q-14 0-22-9.5t-8-20.5q0-5 2-10.5t7-10.5l161-161q6-6 13-9t15-3q8 0 15 3t13 9l161 161q5 5 7 10.5t2 10.5q0 11-8 20.5t-22 9.5H312ZM160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200h-7q-16 0-30.5-6T737-223L565-395q-17-17-39-26t-46-9q-24 0-46 9t-39 26L223-223q-11 11-25.5 17t-30.5 6h-7q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840Z"/>
</svg>`,
})
export class MsrfAirplayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
