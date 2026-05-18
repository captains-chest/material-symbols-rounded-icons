import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-pergola-icon',
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
  <path d="M120-160v-680q0-17 11.5-28.5T160-880q17 0 28.5 11.5T200-840v40h560v-40q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840v680q0 17-11.5 28.5T800-120q-17 0-28.5-11.5T760-160v-400H200v400q0 17-11.5 28.5T160-120q-17 0-28.5-11.5T120-160Zm320 0v-80h-80q-17 0-28.5-11.5T320-280q0-17 11.5-28.5T360-320h240q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240h-80v80q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z"/>
</svg>`,
})
export class MsrfPergolaIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
