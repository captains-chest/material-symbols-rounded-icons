import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-blinds-2-icon',
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
  <path d="M240-80q-33 0-56.5-23.5T160-160v-480h-40q-17 0-28.5-11.5T80-680v-80q0-50 35-85t85-35h560q50 0 85 35t35 85v80q0 17-11.5 28.5T840-640h-40v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-120H240v120Zm0-200h480v-120h-80v40q0 17-11.5 28.5T600-400q-17 0-28.5-11.5T560-440v-40H240v120Zm0-200h320v-80H240v80Zm400 0h80v-80h-80v80Z"/>
</svg>`,
})
export class MsrfBlinds2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
