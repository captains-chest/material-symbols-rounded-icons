import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-wb-iridescent-icon',
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
  <path d="M200-438v-80q0-33 23.5-56.5T280-598h400q33 0 56.5 23.5T760-518v80q0 33-23.5 56.5T680-358H280q-33 0-56.5-23.5T200-438Zm240-362v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40q0 17-11.5 28.5T480-760q-17 0-28.5-11.5T440-800Zm280 68 16-16q11-11 28-11t28 11q11 11 11 28t-11 28l-16 16q-11 11-28 11t-28-11q-11-11-11-28t11-28ZM440-120v-40q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v40q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Zm296-88-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l16 16q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM184-676l-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l16 16q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm-16 412 16-16q11-11 28-11t28 11q11 11 11 28t-11 28l-16 16q-11 11-28 11t-28-11q-11-11-11-28t11-28Z"/>
</svg>`,
})
export class MsrfWbIridescentIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
