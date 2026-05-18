import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mobile-speaker-icon',
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
  <path d="M200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h360q33 0 56.5 23.5T640-800v74q0 16-6 30.5T617-670L427-480h-67q-33 0-56.5 23.5T280-400v160q0 33 23.5 56.5T360-160h67q17 0 28.5 11.5T467-120q0 17-11.5 28.5T427-80H200Zm180-600q17 0 28.5-11.5T420-720q0-17-11.5-28.5T380-760q-17 0-28.5 11.5T340-720q0 17 11.5 28.5T380-680Zm186 546L460-240h-60q-17 0-28.5-11.5T360-280v-80q0-17 11.5-28.5T400-400h60l106-106q10-10 22-5t12 19v344q0 14-12 19t-22-5Zm142-88q-9 6-18.5.5T680-239v-162q0-11 9.5-17.5t18.5-.5q24 16 38 42t14 57q0 31-14.5 56.5T708-222Zm11 171q-14 4-24-5t-13-23q-3-14 4.5-30t30.5-26q56-24 89.5-74T840-320q0-60-33-110.5T718-504q-23-10-31-26t-5-30q3-14 13-23t24-5q90 26 145.5 100T920-320q0 94-55.5 168.5T719-51Z"/>
</svg>`,
})
export class MsrfMobileSpeakerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
