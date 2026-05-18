import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chip-extraction-icon',
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
  <path d="M200-480q0 106 69 185t174 93q16 2 26.5 14t10.5 28q0 17-14.5 28t-32.5 9q-135-17-224-118.5T120-480q0-136 88.5-237.5T432-837q19-2 33.5 8.5T480-800q0 16-10.5 28T443-758q-105 14-174 93t-69 185Zm487 40H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h287l-75-75q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l144 144q12 12 12 28t-12 28L668-308q-12 12-28 11.5T612-309q-12-12-12-28t12-28l75-75Z"/>
</svg>`,
})
export class MsrfChipExtractionIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
