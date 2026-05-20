import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-shades-closed-icon',
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
  <path d="M459-80q-11 0-20.5-6.5T423-103q-16-26-43.5-41.5T320-160q-34 0-61.5 16T214-102q-6 10-15.5 16T178-80h-18q-17 0-28.5-11.5T120-120v-680h-1q-17 0-28-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800v680q0 17-11.5 28.5T800-80h-20q-11 0-21-6.5T743-103q-17-26-44-41.5T640-160q-34 0-61 15.5T535-103q-6 10-15.5 16.5T499-80h-40Zm61-720h-80v566h80v-566Z"/>
</svg>`,
})
export class MsrfShadesClosedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
