import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-social-leaderboard-icon',
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
  <path d="M299-120q-91 0-155-64T80-339q0-86 57.5-148.5T281-557L149-822q-10-20 1.5-39t34.5-19h166q23 0 41.5 12t29.5 32l58 116 58-116q11-20 29.5-32t41.5-12h166q23 0 34.5 19t1.5 39L680-559q85 8 142.5 70.5T880-340q0 92-64 156t-156 64q-9 0-18.5-.5T623-123q55-36 86-93.5T740-340q0-109-75.5-184.5T480-600q-109 0-184.5 75.5T220-340q0 68 28 128t88 89q-9 2-18.5 2.5t-18.5.5Zm181-40q-75 0-127.5-52.5T300-340q0-75 52.5-127.5T480-520q75 0 127.5 52.5T660-340q0 75-52.5 127.5T480-160Zm0-126 49 37q6 5 12 .5t4-11.5l-19-61 49-35q6-5 4-11.5t-10-6.5h-60l-19-65q-2-7-10-7t-10 7l-19 65h-60q-8 0-10 6.5t4 11.5l49 35-19 61q-2 7 4 11.5t12-.5l49-37Z"/>
</svg>`,
})
export class MsrfSocialLeaderboardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
