import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-multicooker-icon',
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
  <path d="M320-760v-40q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v40h120q33 0 56.5 23.5T840-680v40H120v-40q0-33 23.5-56.5T200-760h120ZM200-120q-33 0-56.5-23.5T120-200v-360h160v80q0 33 23.5 56.5T360-400h240q33 0 56.5-23.5T680-480v-80h160v360q0 33-23.5 56.5T760-120H200Zm120-120q17 0 28.5-11.5T360-280q0-17-11.5-28.5T320-320q-17 0-28.5 11.5T280-280q0 17 11.5 28.5T320-240Zm160 0q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm160 0q17 0 28.5-11.5T680-280q0-17-11.5-28.5T640-320q-17 0-28.5 11.5T600-280q0 17 11.5 28.5T640-240ZM360-480v-80h240v80H360Zm40-280h160v-40H400v40Z"/>
</svg>`,
})
export class MsrfMulticookerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
