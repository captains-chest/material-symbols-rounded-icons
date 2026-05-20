import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-roller-skating-icon',
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
  <path d="M240-320q-33 0-56.5-23.5T160-400v-440q0-33 23.5-56.5T240-920h160q33 0 56.5 23.5T480-840v40H380q-8 0-14 6t-6 14q0 8 6 14t14 6h100v20q0 5 .5 10t1.5 10H380q-8 0-14 6t-6 14q0 8 6 14t14 6h116q14 23 35.5 39t47.5 24l105 29q52 14 84 56.5t32 96.5v35q0 33-23.5 56.5T720-320H240ZM200-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm560 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-280 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
</svg>`,
})
export class MsrfRollerSkatingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
