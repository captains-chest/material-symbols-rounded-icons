import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-congenital-icon',
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
  <path d="M392-200q-100 0-185.5-51T74-391l-25-46q-11-22-8.5-46T59-526l201-245q9-11 21-18t26-9q14-2 27-.5t26 8.5l120 64 98-54q17-10 36-7t33 17q14 13 17.5 31.5T660-703L536-414q-11 26-36 39t-54 7l-304-65q36 71 103.5 112T392-280h179q55 0 106-21t90-59h-34q-37 0-60.5-28T654-452l27-178q3-19 15-31t28-17q16-5 32.5-.5T786-660l114 134q15 18 18.5 41.5T912-440l-15 32q-45 95-132.5 151.5T571-200H392Z"/>
</svg>`,
})
export class MsrfCongenitalIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
