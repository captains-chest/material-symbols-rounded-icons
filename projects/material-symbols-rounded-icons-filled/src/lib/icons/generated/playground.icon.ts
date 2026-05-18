import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-playground-icon',
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
  <path d="M79-120q-17 0-28-11.5T40-160q0-17 11.5-28.5T80-200h2l35-525q2-32 25-53.5t55-21.5h245q32 0 55 21.5t25 53.5l36 525h162v-246q-52-14-86-56t-34-98q0-34 13-63.5t36-51.5q-5-11-7-22t-2-23q0-50 35-85t85-35q50 0 85 35t35 85q0 12-2 23t-7 22q23 22 36 51.5t13 63.5q0 56-34 98t-86 56v246h80q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120H79Zm84-80h314l-35-520h-32v361q13 3 21.5 14t8.5 25q0 17-11.5 28.5T400-280H240q-17 0-28.5-11.5T200-320q0-14 8.5-25t21.5-14v-361h-32l-35 520Zm127-160h60v-360h-60v360Z"/>
</svg>`,
})
export class MsrfPlaygroundIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
