import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-contextual-token-add-icon',
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
  <path d="M720-680h-40q-17 0-28.5-11.5T640-720q0-17 11.5-28.5T680-760h40v-40q0-17 11.5-28.5T760-840q17 0 28.5 11.5T800-800v40h40q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680h-40v40q0 17-11.5 28.5T760-600q-17 0-28.5-11.5T720-640v-40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h367q18 0 29.5 14.5T563-753q-2 8-2.5 16.5T560-720q0 34 10.5 64.5T600-600v240q0 17 11.5 28.5T640-320h40q17 0 28.5-11.5T720-360v-164q10 2 19.5 3t20.5 1q19 0 36.5-3.5T831-533q17-7 33 2.5t16 26.5v264q0 33-23.5 56.5T800-160H160Zm120-160h200q17 0 28.5-11.5T520-360v-40q0-17-11.5-28.5T480-440H280q-17 0-28.5 11.5T240-400v40q0 17 11.5 28.5T280-320Zm0-200h200q17 0 28.5-11.5T520-560v-40q0-17-11.5-28.5T480-640H280q-17 0-28.5 11.5T240-600v40q0 17 11.5 28.5T280-520Z"/>
</svg>`,
})
export class MsrfContextualTokenAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
