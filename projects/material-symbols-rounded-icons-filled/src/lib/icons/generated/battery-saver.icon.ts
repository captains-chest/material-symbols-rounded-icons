import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-battery-saver-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M640-200h-80q-17 0-28.5-11.5T520-240q0-17 11.5-28.5T560-280h80v-80q0-17 11.5-28.5T680-400q17 0 28.5 11.5T720-360v80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80v80q0 17-11.5 28.5T680-80q-17 0-28.5-11.5T640-120v-80ZM320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v253q0 11-8 19.5t-19 9.5q-42 5-78 22.5T511-410q-32 32-51.5 75.5T440-240q0 30 7 58t21 54q8 17 0 32.5T443-80H320Z"/>
</svg>`,
})
export class MsrfBatterySaverIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
