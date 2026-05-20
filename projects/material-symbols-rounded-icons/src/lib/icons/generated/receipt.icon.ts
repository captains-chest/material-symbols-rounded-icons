import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-receipt-icon',
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
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M120-104v-752q0-7 6-9.5t11 2.5l29 29q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l29-29q5-5 11-2.5t6 9.5v752q0 7-6 9.5T823-97l-29-29q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-29 29q-5 5-11 2.5t-6-9.5Zm160-176h400q17 0 28.5-11.5T720-320q0-17-11.5-28.5T680-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm0-160h400q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440Zm0-160h400q17 0 28.5-11.5T720-640q0-17-11.5-28.5T680-680H280q-17 0-28.5 11.5T240-640q0 17 11.5 28.5T280-600Zm-80 404h560v-568H200v568Zm0-568v568-568Z"/>
</svg>`,
})
export class MsrReceiptIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
