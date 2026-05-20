import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-more-up-icon',
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
  <path d="M680-680H360q-17 0-28.5-11.5T320-720q0-17 11.5-28.5T360-760h360q17 0 28.5 11.5T760-720v360q0 17-11.5 28.5T720-320q-17 0-28.5-11.5T680-360v-320ZM480-480H160q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h360q17 0 28.5 11.5T560-520v360q0 17-11.5 28.5T520-120q-17 0-28.5-11.5T480-160v-320Z"/>
</svg>`,
})
export class MsrfMoreUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
