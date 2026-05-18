import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-portrait-lighting-off-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m763 972-77-76H200q-17 0-28.5-11.5T160 856v-72q0-34 17.5-62.5T224 678q45-23 91.5-37t94.5-21L83 293q-12-12-11.5-28.5T84 236q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763 972ZM480 816h126L486 696h-6v120Zm256-138q29 14 46 42.5t18 61.5L666 648q18 7 35.5 14t34.5 16ZM568 550l-59-59q23-9 37-29.5t14-45.5q0-33-23.5-56.5T480 336v126L346 328q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Z"/>
</svg>`,
})
export class MsrfPortraitLightingOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
