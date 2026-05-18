import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-game-button-zl-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m327-390 129-183 4-26q0-9-6-15t-15-6H288q-11 0-18 7t-7 18q0 11 7 18t18 7h102L261-385l-4 25q0 8 6 14t14 6h161q11 0 18-7t7-18q0-11-7-18t-18-7H327Zm249 0v-203q0-11-8-19t-19-8q-11 0-19 8t-8 19v213q0 17 11.5 28.5T562-340h113q11 0 18-7t7-18q0-11-7-18t-18-7h-99Zm304-330v400q0 66-47 113t-113 47H240q-66 0-113-47T80-320v-400q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-80 0H160v400q0 33 23.5 56.5T240-240h480q33 0 56.5-23.5T800-320v-400Zm0 0H160h640Z"/>
</svg>`,
})
export class MsrGameButtonZlIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
