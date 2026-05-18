import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-odt-icon',
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
  <path d="M240-360h80q17 0 28.5-11.5T360-400v-160q0-17-11.5-28.5T320-600h-80q-17 0-28.5 11.5T200-560v160q0 17 11.5 28.5T240-360Zm20-60v-120h40v120h-40Zm160 60h100q17 0 28.5-11.5T560-400v-160q0-17-11.5-28.5T520-600H420q-8 0-14 6t-6 14v200q0 8 6 14t14 6Zm40-60v-120h40v120h-40Zm220 60q13 0 21.5-8.5T710-390v-150h20q13 0 21.5-8.5T760-570q0-13-8.5-21.5T730-600H630q-13 0-21.5 8.5T600-570q0 13 8.5 21.5T630-540h20v150q0 13 8.5 21.5T680-360ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
</svg>`,
})
export class MsrfOdtIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
