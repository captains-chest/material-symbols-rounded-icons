import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-vpn-key-alert-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M280-400q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 45.5T506-560h214q17 0 28.5 11.5T760-520v240q0 17-11.5 28.5T720-240q-17 0-28.5-11.5T680-280v-120H506q-24 69-84.5 114.5T280-240Zm600 0q-17 0-28.5-11.5T840-280q0-17 11.5-28.5T880-320q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240Zm0-160q-17 0-28.5-11.5T840-440v-120q0-17 11.5-28.5T880-600q17 0 28.5 11.5T920-560v120q0 17-11.5 28.5T880-400Z"/>
</svg>`,
})
export class MsrfVpnKeyAlertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
