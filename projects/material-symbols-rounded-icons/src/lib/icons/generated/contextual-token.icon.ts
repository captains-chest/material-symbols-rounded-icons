import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-contextual-token-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M280-320h200q17 0 28.5-11.5T520-360v-40q0-17-11.5-28.5T480-440H280q-17 0-28.5 11.5T240-400v40q0 17 11.5 28.5T280-320Zm360 0h40q17 0 28.5-11.5T720-360v-240q0-17-11.5-28.5T680-640h-40q-17 0-28.5 11.5T600-600v240q0 17 11.5 28.5T640-320ZM280-520h200q17 0 28.5-11.5T520-560v-40q0-17-11.5-28.5T480-640H280q-17 0-28.5 11.5T240-600v40q0 17 11.5 28.5T280-520ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
</svg>`,
})
export class MsrContextualTokenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
