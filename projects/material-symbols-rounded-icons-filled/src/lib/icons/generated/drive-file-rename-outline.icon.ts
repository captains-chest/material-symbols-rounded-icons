import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-drive-file-rename-outline-icon',
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
  <path d="m10 21 4-4h6q.825 0 1.413.587Q22 18.175 22 19q0 .825-.587 1.413Q20.825 21 20 21Zm8.3-12.075-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM3 21q-.425 0-.712-.288Q2 20.425 2 20v-2.825q0-.2.075-.387.075-.188.225-.338l10.3-10.3 4.25 4.25-10.3 10.3q-.15.15-.337.225-.188.075-.388.075Z"/>
</svg>`,
})
export class MsrfDriveFileRenameOutlineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
