import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-trolley-icon',
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
  <path d="M800-280H240q-33 0-56.5-23.5T160-360v-400h-40q-17 0-28.5-11.5T80-800q0-17 11.5-28.5T120-840h40q33 0 56.5 23.5T240-760v400h560q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280ZM240-80q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm80-320q-17 0-28.5-11.5T280-440v-160q0-17 11.5-28.5T320-640h160q17 0 28.5 11.5T520-600v160q0 17-11.5 28.5T480-400H320Zm280 0q-17 0-28.5-11.5T560-440v-160q0-17 11.5-28.5T600-640h160q17 0 28.5 11.5T800-600v160q0 17-11.5 28.5T760-400H600ZM760-80q-33 0-56.5-23.5T680-160q0-33 23.5-56.5T760-240q33 0 56.5 23.5T840-160q0 33-23.5 56.5T760-80Z"/>
</svg>`,
})
export class MsrfTrolleyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
