import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-speaker-phone-icon',
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
  <path d="M480-680q-30 0-58 9t-53 26q-14 10-31 9t-29-13q-12-12-12-28.5t14-26.5q37-27 80-41.5t89-14.5q46 0 89 14.5t80 41.5q14 10 14 26.5T651-649q-12 12-29 13t-31-9q-25-17-52.5-26t-58.5-9Zm0-160q-61 0-118.5 20T256-762q-14 11-30 10.5T198-764q-12-12-11-28.5t14-27.5q60-48 131-74t148-26q77 0 148 26t131 74q13 11 14 27.5T762-764q-12 12-28 12.5T704-762q-48-38-105.5-58T480-840ZM400-80q-33 0-56.5-23.5T320-160v-320q0-33 23.5-56.5T400-560h160q33 0 56.5 23.5T640-480v320q0 33-23.5 56.5T560-80H400Z"/>
</svg>`,
})
export class MsrfSpeakerPhoneIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
