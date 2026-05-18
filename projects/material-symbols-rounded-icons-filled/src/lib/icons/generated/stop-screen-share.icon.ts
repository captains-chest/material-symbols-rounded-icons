import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stop-screen-share-icon',
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
  <path d="M728-120H80q-17 0-28.5-11.5T40-160q0-17 11.5-28.5T80-200h567l-40-40H160q-33 0-56.5-23.5T80-320v-446l-25-26q-11-12-11-28t12-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-64-64ZM400-446l-73-74q-5 9-6 19t-1 21v40q0 17 11.5 28.5T360-400q17 0 28.5-11.5T400-440v-6Zm428 200L577-497l49-49q6-6 6-14t-6-14l-89-89q-5-5-11-2.5t-6 9.5v56h-46L234-840h566q33 0 56.5 23.5T880-760v440q0 26-14.5 45.5T828-246Z"/>
</svg>`,
})
export class MsrfStopScreenShareIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
