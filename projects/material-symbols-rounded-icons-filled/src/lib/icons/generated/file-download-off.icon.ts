import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-file-download-off-icon',
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
  <path d="m763-84-77-76H240q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h366L503-343q-6 3-11.5 4.5T480-337q-10 0-16.5-3t-11.5-8L308-492q-11-11-11.5-25.5T304-542L83-763q-11-11-11-28t12-29q11-11 28-11t29 11l679 680q11 11 11 28t-11 28q-12 12-29 12t-28-12ZM652-548q11 11 11 28t-11 28l-7 7q-12 12-28 11.5T589-486q-12-12-12-28.5t12-28.5l6-6q11-11 28.5-10.5T652-548ZM480-800q17 0 28.5 11.5T520-760v110q0 20-12.5 29.5T480-611q-15 0-27.5-10T440-651v-109q0-17 11.5-28.5T480-800Z"/>
</svg>`,
})
export class MsrfFileDownloadOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
