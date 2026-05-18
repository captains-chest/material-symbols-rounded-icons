import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nightlight-icon',
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
  <path d="M560-80q-83 0-156-31.5T277-197q-54-54-85.5-127T160-480q0-83 31.5-156T277-763q54-54 127-85.5T560-880q35 0 70 7t67 21q12 5 18 15.5t6 21.5q0 9-3.5 17T706-784q-70 55-108 135t-38 169q0 90 37 170t108 134q8 6 11.5 14.5T720-144q0 11-6 21.5T696-107q-32 14-66.5 20.5T560-80Z"/>
</svg>`,
})
export class MsrfNightlightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
