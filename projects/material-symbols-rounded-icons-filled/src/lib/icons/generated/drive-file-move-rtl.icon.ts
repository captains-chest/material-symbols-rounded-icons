import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-drive-file-move-rtl-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M12.725 16.325q.275-.275.275-.7 0-.425-.275-.7L11.8 14H15q.425 0 .713-.288Q16 13.425 16 13t-.287-.713Q15.425 12 15 12h-3.2l.925-.925q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275L8.7 12.3q-.275.275-.275.7 0 .425.275.7l2.625 2.625q.275.275.7.275.425 0 .7-.275ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/>
</svg>`,
})
export class MsrfDriveFileMoveRtlIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
