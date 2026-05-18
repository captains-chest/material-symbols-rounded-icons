import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-youtube-video-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M480-200q-71 0-133-2-53-2-104.5-5.5T168-217q-26-7-45-26t-26-45q-6-23-9.5-56T82-407q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-758q62-2 133-2l40 .5q40 .5 92.5 2t104.5 5q52 3.5 75 9.5 26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73t-2 73q-2 30-5.5 63t-9.5 56q-7 26-26 45t-45 26q-23 6-75 9.5t-104.5 5q-52.5 1.5-92.5 2l-40 .5Zm0-80q87 0 177.5-3.5T772-294q5-2 8.5-5.5t5.5-8.5q8-29 11-83t3-89q0-35-3-89t-11-83q-2-5-5.5-8.5T772-666q-24-7-114.5-10.5T480-680q-87 0-177.5 3.5T188-666q-5 2-8.5 5.5T174-652q-8 29-11 83t-3 89q0 35 3 89t11 83q2 5 5.5 8.5t8.5 5.5q24 7 114.5 10.5T480-280Zm98-217-148-86q-10-6-20 .5T400-565v170q0 11 10 17.5t20 .5l148-86q10-6 10-17t-10-17Zm-98 17Z"/>
</svg>`,
})
export class MsrYoutubeVideoIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
