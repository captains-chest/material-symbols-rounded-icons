import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-ulna-radius-icon',
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
  <path d="M719-82q-22 0-42.5-8.5T642-113l-4.5-4.5-4.5-4.5h-94q-42 0-71-29.5T439-223q0-23 10-43.5t30-36.5l40-32v-222l-62-88q-9-13-13.5-28t-4.5-29q0-42 29-71t71-29h200q42 0 70.5 28.5T838-703q0 15-4 29t-13 27l-62 90v224l39 39q20 20 30.5 43.5T839-202q0 50-35 85t-85 35Zm-367-52q-11 5-22.5 7.5T306-124q-45 0-76-30.5T199-229v-364l-70-147q-5-10-7.5-21t-2.5-22q0-42 29-70.5t71-28.5h180v80q42 0 71 29t29 71q0 17-5 31.5T479-643l-40 54v200l43 65q8 13 12.5 27.5T499-268q0 29-15 53t-40 36l-92 45Z"/>
</svg>`,
})
export class MsrfUlnaRadiusIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
