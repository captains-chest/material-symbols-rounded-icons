import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-flightsmode-icon',
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
  <path d="m274-274-100-55q-11-6-12.5-17.5T168-366l12-12q4-4 9.5-5.5t10.5-.5l88 12 156-156-272-148q-15-8-17.5-25t9.5-29l10-10q7-7 15.5-9t17.5 0l363 93 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l93 361q2 10-.5 19.5T739-173l-5 5q-14 14-32.5 11T674-177L528-444 372-288l12 86q1 7-1 13t-7 11l-5 5q-10 10-24 8.5T326-179l-52-95Z"/>
</svg>`,
})
export class MsrfFlightsmodeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
