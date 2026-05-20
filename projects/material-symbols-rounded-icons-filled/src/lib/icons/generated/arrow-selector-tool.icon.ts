import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrow-selector-tool-icon',
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
  <path d="M606-105q-23 11-46 2.5T526-134L406-392l-93 130q-17 24-45 15t-28-38v-513q0-25 22.5-36t42.5 5l404 318q23 17 13.5 44T684-440H516l119 255q11 23 2.5 46T606-105Z"/>
</svg>`,
})
export class MsrfArrowSelectorToolIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
