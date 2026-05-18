import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-party-mode-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Zm1 180q72 0 125.5-45.5T660-420q0-17-11.5-28.5T620-460q-17 0-28.5 11.5T580-420q0 35-27 57.5T490-340H377q-14 0-18 15t9 26q23 20 52.5 29.5T481-260ZM341-420q17 0 28.5-11.5T381-460q0-35 27-57.5t63-22.5h113q14 0 18-15t-9-26q-23-20-52.5-29.5T480-620q-72 0-125.5 45.5T301-460q0 17 11.5 28.5T341-420Z"/>
</svg>`,
})
export class MsrPartyModeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
