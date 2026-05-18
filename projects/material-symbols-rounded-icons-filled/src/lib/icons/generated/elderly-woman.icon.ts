import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-elderly-woman-icon',
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
  <path d="M540-740q-33 0-56.5-23.5T460-820q0-8 4-24-11-5-17.5-14.5T440-880q0-17 11.5-28.5T480-920q12 0 21.5 6.5T516-896q6-2 12-3t12-1q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Zm160 350q-8 0-14-6t-6-14v-19q-38-21-78-54.5T543-557l-23 117 80 239v161h-80v-160h-80L344-72q-10 14-26 16t-30-8q-14-10-16-26t8-30l60-80h-49q-18 0-28.5-15T252-250q0-35 13.5-95.5T313-495q34-90 80.5-157.5T494-720q37 0 51.5 23t41.5 69q32 54 58 81t56 41q11-8 19-11t19-3q25 0 43 18t18 42v400q0 8-6 14t-14 6q-8 0-14-6t-6-14v-400q0-8-6-14t-14-6q-8 0-14 6t-6 14v50q0 8-6 14t-14 6Z"/>
</svg>`,
})
export class MsrfElderlyWomanIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
