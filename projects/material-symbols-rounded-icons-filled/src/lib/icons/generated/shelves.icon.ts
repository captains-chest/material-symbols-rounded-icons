import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-shelves-icon',
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
  <path d="M160-40q-17 0-28.5-11.5T120-80v-800q0-17 11.5-28.5T160-920q17 0 28.5 11.5T200-880v40h560v-40q0-17 11.5-28.5T800-920q17 0 28.5 11.5T840-880v800q0 17-11.5 28.5T800-40q-17 0-28.5-11.5T760-80v-40H200v40q0 17-11.5 28.5T160-40Zm40-480h80v-120q0-17 11.5-28.5T320-680h160q17 0 28.5 11.5T520-640v120h240v-240H200v240Zm0 320h240v-120q0-17 11.5-28.5T480-360h160q17 0 28.5 11.5T680-320v120h80v-240H200v240Z"/>
</svg>`,
})
export class MsrfShelvesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
