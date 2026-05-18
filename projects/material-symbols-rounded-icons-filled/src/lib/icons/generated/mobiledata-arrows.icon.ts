import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobiledata-arrows-icon',
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
  <path d="M320-274v-247q0-17 11.5-28.5T360-561q17 0 28.5 11.5T400-521v247l34-34q12-12 28-11.5t28 11.5q12 12 12.5 28.5T491-251L388-148q-12 12-28 12t-28-12L229-251q-12-12-11.5-28.5T230-308q12-11 28-11.5t28 11.5l34 34Zm240-414-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36v247q0 17-11.5 28.5T600-401q-17 0-28.5-11.5T560-441v-247Z"/>
</svg>`,
})
export class MsrfMobiledataArrowsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
