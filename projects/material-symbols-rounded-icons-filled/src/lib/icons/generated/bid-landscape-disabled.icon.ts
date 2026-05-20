import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-bid-landscape-disabled-icon',
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
  <path d="M728-120H200q-33 0-56.5-23.5T120-200v-528l-76-76q-12-12-12-28.5T44-861q12-12 28.5-12t28.5 12l760 760q12 12 12 28t-12 28q-12 12-28.5 12T804-45l-76-75Zm112-640v427q0 27-24.5 37.5T772-304L650-426l100-113q13-14 10-29.5T746-595q-11-11-26.5-11.5T690-592l-97 109-289-289q-19-19-8.5-43.5T333-840h427q33 0 56.5 23.5T840-760ZM360-442l139 139q10 10 23 9.5t22-10.5L326-522 212-408q-14 14-12.5 30t12.5 27q11 11 27 12.5t30-12.5l91-91Z"/>
</svg>`,
})
export class MsrfBidLandscapeDisabledIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
