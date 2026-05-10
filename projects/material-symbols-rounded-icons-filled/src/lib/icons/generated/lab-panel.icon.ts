import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-lab-panel-icon',
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
  <path d="M120-120q-33 0-56.5-23.5T40-200v-200q0-33 23.5-56.5T120-480v-171q-18-11-29-28.5T80-720v-40q0-33 23.5-56.5T160-840h200q33 0 56.5 23.5T440-760v40q0 23-11 40.5T400-651v171h160v-171q-18-11-29-28.5T520-720v-40q0-33 23.5-56.5T600-840h200q33 0 56.5 23.5T880-760v40q0 23-11 40.5T840-651v171q33 0 56.5 23.5T920-400v200q0 33-23.5 56.5T840-120H120Zm520-360h120v-160H640v160Zm-440 0h120v-160H200v160Z"/>
</svg>`,
})
export class MsrfLabPanelIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
