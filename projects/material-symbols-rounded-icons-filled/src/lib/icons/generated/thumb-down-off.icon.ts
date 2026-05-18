import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-thumb-down-off-icon',
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
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M3 16q-.8 0-1.4-.6Q1 14.8 1 14v-2q0-.175.038-.375.037-.2.112-.375l3-7.05q.225-.5.75-.85T6 3h8q.825 0 1.413.587Q16 4.175 16 5v10.175q0 .4-.162.763-.163.362-.438.637l-5.425 5.4q-.375.35-.887.425-.513.075-.988-.175t-.688-.7q-.212-.45-.087-.925L8.45 16ZM20 3q.825 0 1.413.587Q22 4.175 22 5v9q0 .825-.587 1.412Q20.825 16 20 16q-.825 0-1.413-.588Q18 14.825 18 14V5q0-.825.587-1.413Q19.175 3 20 3Z"/>
</svg>`,
})
export class MsrfThumbDownOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
