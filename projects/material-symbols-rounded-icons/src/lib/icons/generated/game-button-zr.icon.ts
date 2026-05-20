import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-game-button-zr-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M264-340h161q11 0 18-7t7-18q0-11-7-18t-18-7H314l129-183 4-26q0-9-6-15t-15-6H275q-11 0-18 7t-7 18q0 11 7 18t18 7h102L248-385l-4 25q0 8 6 14t14 6Zm299-101h37l65 91q4 5 9.5 7.5T686-340q16 0 23.5-14.5T707-382l-51-67q28-11 42.5-31.5T713-531q0-45-26-67t-81-22h-58q-17 0-28.5 11.5T508-580v213q0 11 8.5 19t19.5 8q11 0 19-8.5t8-19.5v-73Zm0-42v-89h46q26 0 37 11.5t11 32.5q0 22-13 33.5T608-483h-45Zm317-237v400q0 66-47 113t-113 47H240q-66 0-113-47T80-320v-400q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-80 0H160v400q0 33 23.5 56.5T240-240h480q33 0 56.5-23.5T800-320v-400Zm0 0H160h640Z"/>
</svg>`,
})
export class MsrGameButtonZrIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
