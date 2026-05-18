import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-flightsmode-icon',
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
  <path d="m274-274-100-55q-11-6-12.5-17.5T168-366l12-12q4-4 9.5-5.5t10.5-.5l88 12 156-156-272-148q-15-8-17.5-25t9.5-29l10-10q7-7 15.5-9t17.5 0l363 93 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l93 361q2 10-.5 19.5T739-173l-5 5q-14 14-32.5 11T674-177L528-444 372-288l12 86q1 7-1 13t-7 11l-5 5q-10 10-24 8.5T326-179l-52-95Z"/>
</svg>`,
})
export class MsrFlightsmodeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
