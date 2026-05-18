import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-rest-area-icon',
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
  <path d="M200-160h-40q-17 0-28.5-11.5T120-200q0-17 11.5-28.5T160-240h160q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160h-40v40q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-40Zm240-160H320q-17 0-28.5-11.5T280-360q0-17 11.5-28.5T320-400h320q17 0 28.5 11.5T680-360q0 17-11.5 28.5T640-320H520v200q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-200Zm240 160h-40q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h160q17 0 28.5 11.5T840-200q0 17-11.5 28.5T800-160h-40v40q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-40ZM160-320q-33 0-56.5-23.5T80-400v-400q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v400q0 33-23.5 56.5T800-320q-17 0-28.5-11.5T760-360q0-16 14.5-22.5T800-400v-61L602-626 495-519q-23 23-54.5 23.5T385-517l-76-70-149 125v62q17 0 28.5 11.5T200-360q0 16-14.5 22.5T160-320Z"/>
</svg>`,
})
export class MsrfRestAreaIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
