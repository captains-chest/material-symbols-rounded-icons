import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-trail-length-medium-icon',
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
  <path d="M320-280q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h160q-14-17-22.5-37T444-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h204q5-23 13.5-43t22.5-37H320q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h320q83 0 141.5 58.5T840-480q0 83-58.5 141.5T640-280H320Zm-160 0q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h40q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280h-40Z"/>
</svg>`,
})
export class MsrfTrailLengthMediumIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
