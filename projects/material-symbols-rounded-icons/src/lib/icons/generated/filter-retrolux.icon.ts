import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-filter-retrolux-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m573-112-61-62q-17 42-52.5 68T380-80q-59 0-99.5-40.5T240-220q0-59 40.5-99.5T380-360q14 0 28 2t26 8L258-613q-8-12-6.5-26t11.5-24l189-189q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l189 189q10 10 11.5 24t-6.5 26L520-340v62l110 110q11 11 11.5 27.5T631-112q-12 12-29 12t-29-12Zm-193-48q25 0 42.5-17.5T440-220q0-25-17.5-42.5T380-280q-25 0-42.5 17.5T320-220q0 25 17.5 42.5T380-160Zm100-264 138-206-138-138-138 138 138 206Zm0-172Z"/>
</svg>`,
})
export class MsrFilterRetroluxIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
