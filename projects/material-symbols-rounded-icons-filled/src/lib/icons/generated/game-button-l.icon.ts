import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-game-button-l-icon',
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
  <path d="M80-240v-400q0-66 47-113t113-47h480q66 0 113 47t47 113v400q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Zm398-151v-202q0-11-8-19t-19-8q-11 0-19.5 8t-8.5 19v214q0 17 11.5 28.5T463-339h108q11 0 18.5-7.5T597-365q0-11-7.5-18.5T571-391h-93Z"/>
</svg>`,
})
export class MsrfGameButtonLIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
