import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-game-trigger-left-icon',
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
  <path d="M351-390v-203q0-11-8.5-19t-19.5-8q-11 0-19 8t-8 19v213q0 17 11.5 28.5T336-340h114q11 0 18-7t7-18q0-11-7-18t-18-7h-99Zm213-180v203q0 11 8.5 19t19.5 8q11 0 19-8t8-19v-203h60q11 0 18-7t7-18q0-11-7-18t-18-7H504q-11 0-18 7t-7 18q0 11 7 18t18 7h60ZM80-240v-400q0-66 47-113t113-47h480q66 0 113 47t47 113v400q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Z"/>
</svg>`,
})
export class MsrfGameTriggerLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
