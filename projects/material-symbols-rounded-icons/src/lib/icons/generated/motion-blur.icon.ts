import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-motion-blur-icon',
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
  <path d="M320-280q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h200q-14-17-22.5-37T484-440h-84q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h84q5-23 13.5-43t22.5-37H160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h520q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H320Zm360-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-560-80q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h160q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440H120Zm40 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h40q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280h-40Z"/>
</svg>`,
})
export class MsrMotionBlurIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
