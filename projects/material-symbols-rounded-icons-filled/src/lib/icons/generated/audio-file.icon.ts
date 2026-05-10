import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-audio-file-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Zm-90 440q38 0 64-26t26-64v-150h80q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520h-80q-17 0-28.5 11.5T480-480v115q-11-8-23.5-11.5T430-380q-38 0-64 26t-26 64q0 38 26 64t64 26Z"/>
</svg>`,
})
export class MsrfAudioFileIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
