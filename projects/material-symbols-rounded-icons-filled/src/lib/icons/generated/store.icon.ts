import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-store-icon',
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
  <path d="M200-800h560q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800Zm0 640q-17 0-28.5-11.5T160-200v-200h-7q-19 0-31-14.5t-8-33.5l40-200q3-14 14-23t25-9h574q14 0 25 9t14 23l40 200q4 19-8 33.5T807-400h-7v200q0 17-11.5 28.5T760-160q-17 0-28.5-11.5T720-200v-200H560v200q0 17-11.5 28.5T520-160H200Zm40-80h240v-160H240v160Z"/>
</svg>`,
})
export class MsrfStoreIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
