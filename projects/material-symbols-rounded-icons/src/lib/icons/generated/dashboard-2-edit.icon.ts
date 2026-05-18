import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-dashboard-2-edit-icon',
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
  <path d="M560-120v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-6 6-13.5 9T666-80h-66q-17 0-28.5-11.5T560-120Zm300-223-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM440-560v-200q0-17 11.5-28.5T480-800h360q17 0 28.5 11.5T880-760v200q0 17-11.5 28.5T840-520H480q-17 0-28.5-11.5T440-560ZM80-200v-200q0-17 11.5-28.5T120-440h320q17 0 28.5 11.5T480-400v200q0 17-11.5 28.5T440-160H120q-17 0-28.5-11.5T80-200Zm0-360v-200q0-17 11.5-28.5T120-800h200q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120q-17 0-28.5-11.5T80-560Zm440-40h280v-120H520v120ZM160-240h240v-120H160v120Zm0-360h120v-120H160v120Zm360 0ZM400-360ZM280-600Z"/>
</svg>`,
})
export class MsrDashboard2EditIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
