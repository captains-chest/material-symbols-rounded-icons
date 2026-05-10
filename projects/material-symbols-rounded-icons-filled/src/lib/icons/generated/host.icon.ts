import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-host-icon',
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
  <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h200q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H160Zm440 0q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h200q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H600ZM320-400q0-17-11.5-28.5T280-440h-40q-17 0-28.5 11.5T200-400q0 17 11.5 28.5T240-360h40q17 0 28.5-11.5T320-400Zm440 0q0-17-11.5-28.5T720-440h-40q-17 0-28.5 11.5T640-400q0 17 11.5 28.5T680-360h40q17 0 28.5-11.5T760-400ZM320-520q0-17-11.5-28.5T280-560h-40q-17 0-28.5 11.5T200-520q0 17 11.5 28.5T240-480h40q17 0 28.5-11.5T320-520Zm440 0q0-17-11.5-28.5T720-560h-40q-17 0-28.5 11.5T640-520q0 17 11.5 28.5T680-480h40q17 0 28.5-11.5T760-520ZM320-640q0-17-11.5-28.5T280-680h-40q-17 0-28.5 11.5T200-640q0 17 11.5 28.5T240-600h40q17 0 28.5-11.5T320-640Zm440 0q0-17-11.5-28.5T720-680h-40q-17 0-28.5 11.5T640-640q0 17 11.5 28.5T680-600h40q17 0 28.5-11.5T760-640Z"/>
</svg>`,
})
export class MsrfHostIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
