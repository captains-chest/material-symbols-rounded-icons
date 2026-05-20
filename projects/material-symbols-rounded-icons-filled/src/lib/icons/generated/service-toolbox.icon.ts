import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-service-toolbox-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-160h200q0 17 11.5 28.5T320-360q16 0 22.5-14.5T360-400h240q0 17 11.5 28.5T640-360q16 0 22.5-14.5T680-400h200v160q0 33-23.5 56.5T800-160H160ZM97-480l83-192q9-22 29-35t43-13h28v-40q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v40h28q23 0 43 13t29 35l83 192H680q0-17-11.5-28.5T640-520q-16 0-22.5 14.5T600-480H360q0-17-11.5-28.5T320-520q-16 0-22.5 14.5T280-480H97Zm263-240h240v-40H360v40Z"/>
</svg>`,
})
export class MsrfServiceToolboxIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
