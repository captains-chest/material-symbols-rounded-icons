import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-lte-mobiledata-icon',
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
  <path d="M160-360v-240q0-17 11.5-28.5T200-640q17 0 28.5 11.5T240-600v200h80q17 0 28.5 11.5T360-360q0 17-11.5 28.5T320-320H200q-17 0-28.5-11.5T160-360Zm280-200h-40q-17 0-28.5-11.5T360-600q0-17 11.5-28.5T400-640h160q17 0 28.5 11.5T600-600q0 17-11.5 28.5T560-560h-40v200q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-200Zm200 200v-240q0-17 11.5-28.5T680-640h120q17 0 28.5 11.5T840-600q0 17-11.5 28.5T800-560h-80v40h80q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440h-80v40h80q17 0 28.5 11.5T840-360q0 17-11.5 28.5T800-320H680q-17 0-28.5-11.5T640-360Z"/>
</svg>`,
})
export class MsrLteMobiledataIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
