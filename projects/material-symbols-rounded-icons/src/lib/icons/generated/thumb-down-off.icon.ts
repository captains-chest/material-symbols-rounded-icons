import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-thumb-down-off-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M3 16q-.8 0-1.4-.6Q1 14.8 1 14v-2q0-.175.05-.375t.1-.375l3-7.05q.225-.5.75-.85T6 3h11v13l-6 5.95q-.375.375-.887.437-.513.063-.988-.187t-.7-.7q-.225-.45-.1-.925L9.45 16Zm12-.85V5H6l-3 7v2h9l-1.35 5.5ZM20 3q.825 0 1.413.587Q22 4.175 22 5v9q0 .825-.587 1.412Q20.825 16 20 16h-3v-2h3V5h-3V3Zm-5 2v10.15V5Z"/>
</svg>`,
})
export class MsrThumbDownOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
