import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-drive-file-move-outline-icon',
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
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m12.2 14-.925.925q-.275.275-.275.7 0 .425.275.7.275.275.7.275.425 0 .7-.275L15.3 13.7q.275-.275.275-.7 0-.425-.275-.7l-2.625-2.625q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7L12.2 12H9q-.425 0-.712.287Q8 12.575 8 13t.288.712Q8.575 14 9 14ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/>
</svg>`,
})
export class MsrfDriveFileMoveOutlineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
