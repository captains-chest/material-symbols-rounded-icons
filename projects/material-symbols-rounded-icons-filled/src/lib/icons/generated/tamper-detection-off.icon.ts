import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tamper-detection-off-icon',
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
  <path d="M600-160q-17 0-28.5-11.5T560-200v-88L248-600H120q-17 0-28.5-11.5T80-640v-80q0-11 2.5-20.5T90-758l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28q-11 11-28 11t-28-11L678-170q-8 5-17.5 7.5T640-160h-40Zm120-192L272-800h368q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v68ZM178-40q-17 0-31.5-6.5T121-64L0-184l14-14q8-8 19-13t23-5q12 0 23 4.5T98-198l22 22v-294q0-13 9-21.5t21-8.5q13 0 21.5 8.5T180-470v150h40v-210q0-13 9-21.5t21-8.5q13 0 21.5 8.5T280-530v210h40v-170q0-13 9-21.5t21-8.5q13 0 21.5 8.5T380-490v170h40v-130q0-13 9-21.5t21-8.5q13 0 21.5 8.5T480-450v330q0 33-23 56.5T400-40H178Z"/>
</svg>`,
})
export class MsrfTamperDetectionOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
