import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-card-membership-icon',
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
  <path d="M160-880h640q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H640v135q0 23-19 34.5t-39 1.5l-84-42q-8-5-18-5t-18 5l-84 42q-20 10-39-1.5T320-145v-135H160q-33 0-56.5-23.5T80-360v-440q0-33 23.5-56.5T160-880Zm0 440h640v-120H160v120Z"/>
</svg>`,
})
export class MsrfCardMembershipIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
