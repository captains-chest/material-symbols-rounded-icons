import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-order-play-icon',
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
  <path d="m701-159 102-64q10-6 10-17t-10-17l-102-64q-10-6-20.5-.5T670-304v128q0 12 10.5 17.5t20.5-.5Zm-21-441q17 0 28.5-11.5T720-640q0-17-11.5-28.5T680-680H280q-17 0-28.5 11.5T240-640q0 17 11.5 28.5T280-600h400Zm40 560q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM200-840h560q33 0 56.5 23.5T840-760v267q-28-14-58.5-20.5T720-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440h244q-17 17-31.5 37T467-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280h163q-2 10-2.5 19.5T440-240q0 42 11.5 80.5T486-86q-5 1-10.5-1.5T466-94l-46-46-46 46q-6 6-14 6t-14-6l-46-46-46 46q-6 6-14 6t-14-6l-46-46-46 46-14 9v-675q0-33 23.5-56.5T200-840Z"/>
</svg>`,
})
export class MsrfOrderPlayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
