import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-game-trigger-right-icon',
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
  <path d="M282-340q11 0 19-8t8-19v-75h37l65 91q4 5 9.5 8t11.5 3q16 0 23.5-14.5T453-382l-51-67q28-11 42.5-31.5T459-531q0-45-26-67t-80-22h-59q-17 0-28.5 11.5T254-580v213q0 11 8.5 19t19.5 8Zm28-143v-89h45q26 0 37.5 11.5T404-528q0 22-13.5 33.5T354-483h-44Zm298 143q11 0 19-8t8-19v-203h60q11 0 18-7t7-18q0-11-7-18t-18-7H521q-11 0-18 7t-7 18q0 11 7 18t18 7h59v203q0 11 8.5 19t19.5 8ZM80-240v-400q0-66 47-113t113-47h480q66 0 113 47t47 113v400q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Z"/>
</svg>`,
})
export class MsrfGameTriggerRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
