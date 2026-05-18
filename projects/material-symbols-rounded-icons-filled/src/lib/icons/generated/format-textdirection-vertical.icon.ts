import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-format-textdirection-vertical-icon',
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
  <path d="M280-240q-17 0-28.5-11.5T240-280v-160q-66 0-113-47T80-600q0-66 47-113t113-47h280q17 0 28.5 11.5T560-720q0 17-11.5 28.5T520-680h-40v400q0 17-11.5 28.5T440-240q-17 0-28.5-11.5T400-280v-400h-80v400q0 17-11.5 28.5T280-240Zm440 63q-8 0-15-2.5t-13-8.5L588-292q-11-11-11.5-27.5T588-348q11-11 28-11t28 11l36 35v-407q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720v407l36-36q12-12 28-11.5t28 12.5q11 12 11.5 28T852-292L748-188q-6 6-13 8.5t-15 2.5Z"/>
</svg>`,
})
export class MsrfFormatTextdirectionVerticalIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
