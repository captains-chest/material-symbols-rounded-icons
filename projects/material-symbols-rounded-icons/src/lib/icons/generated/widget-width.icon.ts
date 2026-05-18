import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-widget-width-icon',
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
  <path d="M80-680v-160q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840v160q0 17-11.5 28.5T840-640H120q-17 0-28.5-11.5T80-680Zm0 560v-160q0-17 11.5-28.5T120-320h160q17 0 28.5 11.5T320-280v160q0 17-11.5 28.5T280-80H120q-17 0-28.5-11.5T80-120Zm280 0v-160q0-17 11.5-28.5T400-320h160q17 0 28.5 11.5T600-280v160q0 17-11.5 28.5T560-80H400q-17 0-28.5-11.5T360-120Zm280 0v-160q0-17 11.5-28.5T680-320h160q17 0 28.5 11.5T880-280v160q0 17-11.5 28.5T840-80H680q-17 0-28.5-11.5T640-120ZM80-400v-160q0-17 11.5-28.5T120-600h160q17 0 28.5 11.5T320-560v160q0 17-11.5 28.5T280-360H120q-17 0-28.5-11.5T80-400Zm280 0v-160q0-17 11.5-28.5T400-600h160q17 0 28.5 11.5T600-560v160q0 17-11.5 28.5T560-360H400q-17 0-28.5-11.5T360-400Zm280 0v-160q0-17 11.5-28.5T680-600h160q17 0 28.5 11.5T880-560v160q0 17-11.5 28.5T840-360H680q-17 0-28.5-11.5T640-400ZM240-240Zm200 0h80-80Zm280 0ZM240-440v-80 80Zm240-40Zm240 40v-80 80ZM160-160h80v-80h-80v80Zm280 0h80v-80h-80v80Zm280 0h80v-80h-80v80ZM160-440h80v-80h-80v80Zm280 0h80v-80h-80v80Zm280 0h80v-80h-80v80Z"/>
</svg>`,
})
export class MsrWidgetWidthIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
