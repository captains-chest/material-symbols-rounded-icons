import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-cam-wall-mount-icon',
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
  <path d="M160-262q-33 0-56.5-23.5T80-342v-320q0-33 23.5-56.5T160-742q33 0 56.5 24t23.5 57q35-55 92.5-88T460-782q52 0 99.5 19.5T644-706l172 172q12 12 18 26.5t6 30.5q0 16-6 30.5T816-420L562-166q-11 11-25.5 17t-30.5 6q-16 0-31-6t-26-17L276-338q-11-11-19.5-22T240-383v41q0 33-23.5 56.5T160-262Z"/>
</svg>`,
})
export class MsrfNestCamWallMountIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
