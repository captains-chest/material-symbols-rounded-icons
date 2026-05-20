import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-network-locked-icon',
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
  <path d="M714-80q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T800-400q33 0 56.5 23.5T880-320v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H714Zm46-200h80v-40q0-17-11.5-28.5T800-360q-17 0-28.5 11.5T760-320v40ZM177-80q-27 0-37.5-24.5T148-148l664-664q19-19 43.5-8.5T880-783v263q0 17-11.5 28.5T840-480h-40q-83 0-141.5 58.5T600-280v160q0 17-11.5 28.5T560-80H177Z"/>
</svg>`,
})
export class MsrfNetworkLockedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
