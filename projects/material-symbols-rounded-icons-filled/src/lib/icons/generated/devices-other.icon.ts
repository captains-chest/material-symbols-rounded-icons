import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-devices-other-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h600q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720H160v480h80q17 0 28.5 11.5T280-200q0 17-11.5 28.5T240-160h-80Zm280-100q25 0 42.5-17.5T500-320q0-25-17.5-42.5T440-380q-25 0-42.5 17.5T380-320q0 25 17.5 42.5T440-260Zm400 100H640q-17 0-28.5-11.5T600-200v-360q0-17 11.5-28.5T640-600h200q17 0 28.5 11.5T880-560v360q0 17-11.5 28.5T840-160Zm-480-40v-31q-19-17-29.5-40T320-320q0-26 10.5-49t29.5-40v-31q0-17 11.5-28.5T400-480h80q17 0 28.5 11.5T520-440v31q19 17 29.5 40t10.5 49q0 26-10.5 49T520-231v31q0 17-11.5 28.5T480-160h-80q-17 0-28.5-11.5T360-200Z"/>
</svg>`,
})
export class MsrfDevicesOtherIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
