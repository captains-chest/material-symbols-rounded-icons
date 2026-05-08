import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-switch-camera-icon',
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
  <path d="M160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Zm-126 42h252l-34 34q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L628-572q-11-11-27.5-11.5T572-572q-11 11-11.5 27.5T571-516l37 38H352l37-38q11-11 11-27.5T388-572q-11-11-28-11t-28 11L228-468q-12 12-12 28t12 28l104 104q11 11 28 11t28-11q11-11 11-28t-11-28l-34-34Z"/>
</svg>`,
})
export class MsrSwitchCameraIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
