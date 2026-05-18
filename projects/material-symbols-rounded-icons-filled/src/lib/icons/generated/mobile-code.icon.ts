import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-code-icon',
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
  <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v84H600q-100 0-170 70t-70 170v160h-80Zm524-44q-12 12-28 11.5T748-85q-11-12-11.5-28t11.5-28l59-59-59-59q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l87 87q12 12 12 28t-12 28l-88 88Zm-249-1-87-87q-12-12-12-28t12-28l88-88q12-12 28-11.5t28 12.5q11 12 11.5 28T612-259l-59 59 59 59q11 11 11 27.5T612-85q-12 12-28.5 12T555-85Zm-75-635q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
</svg>`,
})
export class MsrfMobileCodeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
