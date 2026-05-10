import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-coffee-maker-icon',
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
  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h520q17 0 28.5 11.5T800-840q0 17-11.5 28.5T760-800h-40v80q0 17-11.5 28.5T680-680H360q-17 0-28.5-11.5T320-720v-80h-80v640h162q-38-27-60-68.5T320-320v-120q0-33 23.5-56.5T400-520h240q33 0 56.5 23.5T720-440v120q0 50-22 91.5T638-160h122q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H240Zm280-480q17 0 28.5-11.5T560-600q0-17-11.5-28.5T520-640q-17 0-28.5 11.5T480-600q0 17 11.5 28.5T520-560Z"/>
</svg>`,
})
export class MsrfCoffeeMakerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
