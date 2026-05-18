import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-synagogue-icon',
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
  <path d="M760-640v-40q0-33 23.5-56.5T840-760q33 0 56.5 23.5T920-680v40H760Zm-720 0v-40q0-33 23.5-56.5T120-760q33 0 56.5 23.5T200-680v40H40Zm0 440v-400h160v480h-80q-33 0-56.5-23.5T40-200Zm200 80v-520l189-157q11-9 24-14t27-5q14 0 27 5t24 14l189 157v520H600q-17 0-28.5-11.5T560-160v-160q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320v160q0 17-11.5 28.5T360-120H240Zm520 0v-480h160v400q0 33-23.5 56.5T840-120h-80ZM480-500q25 0 42.5-17.5T540-560q0-25-17.5-42.5T480-620q-25 0-42.5 17.5T420-560q0 25 17.5 42.5T480-500Z"/>
</svg>`,
})
export class MsrfSynagogueIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
