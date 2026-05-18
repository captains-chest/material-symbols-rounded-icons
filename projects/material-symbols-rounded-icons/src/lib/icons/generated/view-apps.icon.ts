import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-view-apps-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M87-168q-18 3-32.5-8.5T40-207v-546q0-19 14.5-30.5T87-792l160 26q14 2 23.5 13.5T280-726v492q0 15-9.5 26.5T247-194L87-168Zm313-32q-17 0-28.5-11.5T360-240v-480q0-17 11.5-28.5T400-760h160q17 0 28.5 11.5T600-720v480q0 17-11.5 28.5T560-200H400Zm313 6q-14-2-23.5-13.5T680-234v-492q0-15 9.5-26.5T713-766l160-26q18-3 32.5 8.5T920-753v546q0 19-14.5 30.5T873-168l-160-26Zm-593-61 80-13v-424l-80-14v451Zm320-25h80v-400h-80v400Zm400 26v-452l-80 14v424l80 14Zm-720-1 80-13-80 13Zm320-25h80-80Zm400 26-80-14 80 14Z"/>
</svg>`,
})
export class MsrViewAppsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
