import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-carpenter-icon',
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
  <path d="M619-108q-11 11-25.5 17T563-85q-16 0-31-6t-26-17l-56-56q-11-11-16.5-24.5T427-216q-1-14 3.5-28t13.5-26l6-8-326-466 156-156 509 509q11 11 17 25.5t6 30.5q0 16-6 31t-17 26L619-108Zm-56-57 169-169-56-57-170 170 57 56Z"/>
</svg>`,
})
export class MsrfCarpenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
