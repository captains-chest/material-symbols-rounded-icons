import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-earbud-left-icon',
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
  <path d="M320-80q-33 0-56.5-23.5T240-160v-320h-40q-33 0-56.5-23.5T120-560v-160q0-33 23.5-56.5T200-800h240q17 0 28.5 11.5T480-760v600q0 33-23.5 56.5T400-80h-80Zm520-560q0 100-70 170t-170 70q-17 0-28.5-11.5T560-440v-400q0-17 11.5-28.5T600-880q100 0 170 70t70 170Z"/>
</svg>`,
})
export class MsrfEarbudLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
