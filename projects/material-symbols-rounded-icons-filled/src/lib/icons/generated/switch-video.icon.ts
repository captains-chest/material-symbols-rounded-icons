import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-switch-video-icon',
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
  <path d="M312-440h176l-16 16q-11 11-11 28t11 28q11 11 28 11t28-11l84-84q6-6 8.5-13t2.5-15q0-8-2.5-15t-8.5-13l-84-84q-11-11-28-11t-28 11q-11 11-11 28t11 28l16 16H312l16-16q11-11 11-28t-11-28q-11-11-28-11t-28 11l-84 84q-6 6-8.5 13t-2.5 15q0 8 2.5 15t8.5 13l84 84q11 11 28 11t28-11q11-11 11-28t-11-28l-16-16ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Z"/>
</svg>`,
})
export class MsrfSwitchVideoIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
