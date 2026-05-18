import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrow-cool-down-icon',
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
  <path d="M480-84q-8 0-15-3t-13-9L228-319q-11-11-11-28t11-29q12-12 28.5-12t28.5 12l155 156v-247q0-17 11.5-28.5T480-507q17 0 28.5 11.5T520-467v247l156-156q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-96q-6 6-13 9t-15 3Zm0-503q-17 0-28.5-11.5T440-627v-40q0-17 11.5-28.5T480-707q17 0 28.5 11.5T520-667v40q0 17-11.5 28.5T480-587Zm0-200q-17 0-28.5-11.5T440-827q0-17 11.5-28.5T480-867q17 0 28.5 11.5T520-827q0 17-11.5 28.5T480-787Z"/>
</svg>`,
})
export class MsrfArrowCoolDownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
