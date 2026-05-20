import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-water-medium-icon',
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
  <path d="M245-474q47-23 97.5-34.5T445-520q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h19l35-320H210l35 326Zm34 394q-31 0-53.5-20.5T200-151l-70-640q-4-35 19.5-62t59.5-27h542q36 0 59.5 27t19.5 62l-70 640q-3 30-25.5 50.5T681-80H279Z"/>
</svg>`,
})
export class MsrfWaterMediumIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
