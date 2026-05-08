import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-data-array-icon',
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
  <path d="M640-160q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h80v-480h-80q-17 0-28.5-11.5T600-760q0-17 11.5-28.5T640-800h80q33 0 56.5 23.5T800-720v480q0 33-23.5 56.5T720-160h-80Zm-400 0q-33 0-56.5-23.5T160-240v-480q0-33 23.5-56.5T240-800h80q17 0 28.5 11.5T360-760q0 17-11.5 28.5T320-720h-80v480h80q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160h-80Z"/>
</svg>`,
})
export class MsrDataArrayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
