import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-bitbucket-icon',
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
  <path d="M228-120q-17 0-28-9t-14-26L81-804q-2-16 6-26t23-10h740q16 0 24 10t5 26l-29 171q-3 17-13.5 26t-27.5 9H363q-3 0-9 12l35 214q0 2 10 10h161q4 0 10-10l25-155q2-14 10.5-20.5T628-554h175q16 0 24 10t6 25l-59 364q-3 17-14 26t-28 9H228Z"/>
</svg>`,
})
export class MsrfBitbucketIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
