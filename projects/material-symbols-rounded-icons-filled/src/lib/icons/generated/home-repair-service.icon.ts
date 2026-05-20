import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-home-repair-service-icon',
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
  <path d="M360-640h240v-80H360v80ZM120-160q-17 0-28.5-11.5T80-200v-160h160q0 17 11.5 28.5T280-320q17 0 28.5-11.5T320-360h320q0 17 11.5 28.5T680-320q17 0 28.5-11.5T720-360h160v160q0 17-11.5 28.5T840-160H120ZM80-400v-160q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v160H720v-40q0-17-11.5-28.5T680-480q-17 0-28.5 11.5T640-440v40H320v-40q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440v40H80Z"/>
</svg>`,
})
export class MsrfHomeRepairServiceIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
