import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-earbud-right-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M480-160v-600q0-17 11.5-28.5T520-800h240q33 0 56.5 23.5T840-720v160q0 33-23.5 56.5T760-480h-40v320q0 33-23.5 56.5T640-80h-80q-33 0-56.5-23.5T480-160ZM120-640q0-100 70-170t170-70q17 0 28.5 11.5T400-840v400q0 17-11.5 28.5T360-400q-100 0-170-70t-70-170Z"/>
</svg>`,
})
export class MsrfEarbudRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
