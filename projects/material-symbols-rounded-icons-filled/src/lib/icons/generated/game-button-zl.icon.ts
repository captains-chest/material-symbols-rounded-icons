import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-game-button-zl-icon',
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
  <path d="m327-390 129-183 4-26q0-9-6-15t-15-6H288q-11 0-18 7t-7 18q0 11 7 18t18 7h102L261-385l-4 25q0 8 6 14t14 6h161q11 0 18-7t7-18q0-11-7-18t-18-7H327Zm249 0v-203q0-11-8-19t-19-8q-11 0-19 8t-8 19v213q0 17 11.5 28.5T562-340h113q11 0 18-7t7-18q0-11-7-18t-18-7h-99Zm304-330v400q0 66-47 113t-113 47H240q-66 0-113-47T80-320v-400q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Z"/>
</svg>`,
})
export class MsrfGameButtonZlIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
