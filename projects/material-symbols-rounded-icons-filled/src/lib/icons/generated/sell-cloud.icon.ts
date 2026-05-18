import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-sell-cloud-icon',
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
  <path d="M240-80h64q18 0 27-15.5t1-32.5q-6-17-9-34.5t-3-37.5q0-67 40-119.5T463-391q30-41 77-64.5t99-23.5h16.5q8.5 0 16.5 2 18 3 32.5-7.5T719-512v-84q1-16-5-30.5T697-653L499-856q-12-12-26.5-18t-30.5-6q-15 0-30 6t-26 18L183-653q-11 11-17 25t-6 31v437q0 35 22.5 57.5T240-80Zm200-519q-25 0-41.5-17.5T380-659q2-25 18.5-42.5T440-719q25 0 41 17.5t19 42.5q-3 25-19 42.5T440-599Zm80 519q-51 0-85.5-34.5T400-200q0-48 33-82.5t81-36.5q16-36 49.5-58.5T637-400q47 0 85.5 26.5T773-300q45 0 76 32.5t31 77.5q0 45-28.5 77.5T780-80H520Z"/>
</svg>`,
})
export class MsrfSellCloudIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
