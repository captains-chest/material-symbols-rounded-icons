import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-physical-therapy-icon',
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
  <path d="M585-83q10 4 19.5 2.5T622-87q8-5 13-13.5t5-19.5v-120q0-17-11.5-28.5T600-280H375q-23 0-37.5 14T320-234q-3 18 5.5 35t30.5 25l229 91Zm184-437q29 0 50 19.5t21 48.5q0 23-13 42t-35 27l-72 23H375q-57 0-96 39t-39 96q0 18 5 34.5t13 30.5h-98q-17 0-28.5-11.5T120-200v-120q0-83 58.5-141.5T320-520h449ZM400-880q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47Z"/>
</svg>`,
})
export class MsrfPhysicalTherapyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
