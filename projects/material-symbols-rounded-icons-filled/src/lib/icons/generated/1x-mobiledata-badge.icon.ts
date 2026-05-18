import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-1x-mobiledata-badge-icon',
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
  <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm160-480v280q0 17 11.5 28.5T320-280q17 0 28.5-11.5T360-320v-320q0-17-11.5-28.5T320-680h-80q-17 0-28.5 11.5T200-640q0 17 11.5 28.5T240-600h40Zm330 193 60 109q5 8 13 13t18 5q20 0 30-17.5t0-34.5l-81-148 82-148q10-17-.5-34.5T701-680q-10 0-18 5t-13 13l-60 109-60-109q-5-8-13-13t-18-5q-20 0-30 17.5t0 34.5l81 148-82 148q-10 17 .5 34.5T519-280q10 0 18-5t13-13l60-109Z"/>
</svg>`,
})
export class Msrf1xMobiledataBadgeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
