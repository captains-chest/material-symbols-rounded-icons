import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-laptop-windows-icon',
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
  <path d="M40-160q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h120v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h120q17 0 28.5 11.5T960-200q0 17-11.5 28.5T920-160H40Zm120-200h640v-400H160v400Zm0 0v-400 400Z"/>
</svg>`,
})
export class MsrLaptopWindowsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
