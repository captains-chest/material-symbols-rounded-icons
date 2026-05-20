import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-fragrance-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M560-640q-17 0-28.5-11.5T520-680q0-17 11.5-28.5T560-720q17 0 28.5 11.5T600-680q0 17-11.5 28.5T560-640Zm240 0q-17 0-28.5-11.5T760-680q0-17 11.5-28.5T800-720q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640Zm-120-80q-17 0-28.5-11.5T640-760q0-17 11.5-28.5T680-800q17 0 28.5 11.5T720-760q0 17-11.5 28.5T680-720Zm120-80q-17 0-28.5-11.5T760-840q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840q0 17-11.5 28.5T800-800ZM680-560q-17 0-28.5-11.5T640-600q0-17 11.5-28.5T680-640q17 0 28.5 11.5T720-600q0 17-11.5 28.5T680-560Zm120 80q-17 0-28.5-11.5T760-520q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520q0 17-11.5 28.5T800-480ZM200-120q-33 0-56.5-23.5T120-200v-280q0-33 23.5-56.5T200-560h240q33 0 56.5 23.5T520-480v280q0 33-23.5 56.5T440-120H200Zm0-500v-140q0-33 23.5-56.5T280-840h120q17 0 28.5 11.5T440-800v180H200Z"/>
</svg>`,
})
export class MsrfFragranceIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
