import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-call-split-icon',
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
  <path d="M240-664v64q0 17-11.5 28.5T200-560q-17 0-28.5-11.5T160-600v-160q0-17 11.5-28.5T200-800h160q17 0 28.5 11.5T400-760q0 17-11.5 28.5T360-720h-64l201 201q11 11 17 25.5t6 30.5v263q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-264L240-664Zm480 0-98 99q-12 12-28.5 12T565-565q-12-12-12-29t12-29l99-97h-64q-17 0-28.5-11.5T560-760q0-17 11.5-28.5T600-800h160q17 0 28.5 11.5T800-760v160q0 17-11.5 28.5T760-560q-17 0-28.5-11.5T720-600v-64Z"/>
</svg>`,
})
export class MsrCallSplitIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
