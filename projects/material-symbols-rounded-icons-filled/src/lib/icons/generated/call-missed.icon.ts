import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-call-missed-icon',
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
  <path d="M200-543v143q0 17-11.5 28.5T160-360q-17 0-28.5-11.5T120-400v-240q0-17 11.5-28.5T160-680h240q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H256l224 224 276-276q12-12 28-11.5t28 12.5q11 12 11.5 28T812-595L537-320q-12 12-27 18t-30 6q-15 0-30-6t-27-18L200-543Z"/>
</svg>`,
})
export class MsrfCallMissedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
