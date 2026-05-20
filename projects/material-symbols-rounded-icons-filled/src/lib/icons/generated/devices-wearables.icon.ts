import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-devices-wearables-icon',
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
  <path d="M700-240q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h320q33 0 56.5 23.5T560-800v145q0 17-11.5 28.5T520-615q-17 0-28.5-11.5T480-655v-25H160v400h216q19 0 34 10.5t23 27.5q15 30 37 56t49 46q7 5 10.5 12t3.5 15q0 15-13 24t-30 9H160Zm440-40v-64q-56-28-88-80.5T480-380q0-63 32-115.5t88-80.5v-64q0-17 11.5-28.5T640-680h120q17 0 28.5 11.5T800-640v64q56 28 88 80.5T920-380q0 63-32 115.5T800-184v64q0 17-11.5 28.5T760-80H640q-17 0-28.5-11.5T600-120Z"/>
</svg>`,
})
export class MsrfDevicesWearablesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
