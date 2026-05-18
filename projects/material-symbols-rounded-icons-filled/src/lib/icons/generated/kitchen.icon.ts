import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-kitchen-icon',
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
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M360-640q17 0 28.5-11.5T400-680v-40q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v40q0 17 11.5 28.5T360-640Zm0 360q17 0 28.5-11.5T400-320v-120q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440v120q0 17 11.5 28.5T360-280ZM240-80q-33 0-56.5-23.5T160-160v-360h640v360q0 33-23.5 56.5T720-80H240Zm-80-520v-200q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v200H160Z"/>
</svg>`,
})
export class MsrfKitchenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
