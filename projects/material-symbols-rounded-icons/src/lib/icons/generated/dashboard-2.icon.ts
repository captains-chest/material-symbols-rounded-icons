import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-dashboard-2-icon',
  standalone: true,
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M640-160q-17 0-28.5-11.5T600-200v-200q0-17 11.5-28.5T640-440h200q17 0 28.5 11.5T880-400v200q0 17-11.5 28.5T840-160H640ZM480-520q-17 0-28.5-11.5T440-560v-200q0-17 11.5-28.5T480-800h360q17 0 28.5 11.5T880-760v200q0 17-11.5 28.5T840-520H480ZM120-160q-17 0-28.5-11.5T80-200v-200q0-17 11.5-28.5T120-440h360q17 0 28.5 11.5T520-400v200q0 17-11.5 28.5T480-160H120Zm0-360q-17 0-28.5-11.5T80-560v-200q0-17 11.5-28.5T120-800h200q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Zm400-80h280v-120H520v120ZM160-240h280v-120H160v120Zm520 0h120v-120H680v120ZM160-600h120v-120H160v120Zm360 0Zm-80 240Zm240 0ZM280-600Z"/>
</svg>`,
})
export class MsrDashboard2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
