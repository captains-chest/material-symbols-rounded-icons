import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-game-button-r2-icon',
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
  <path d="M278-337q11 0 19-8t8-19v-74h37l65 91q4 5 9.5 7.5T428-337q16 0 23.5-14.5T449-379l-51-67q28-11 42.5-31.5T455-528q0-45-25.5-67T350-617h-60q-17 0-28.5 11.5T250-577v213q0 11 8.5 19t19.5 8Zm27-143v-88h46q26 0 37 11t11 32q0 22-13 33.5T350-480h-45Zm241 144h149q11 0 18-6.5t7-17.5q0-11-7-18t-18-7h-96v-3l59-55q33-32 43.5-50.5T712-538q0-39-26-62.5T618-624q-32 0-54.5 13.5T527-568q-5 8 0 16.5t15 12.5q9 4 19 1t15-11q8-13 17-18t23-5q17 0 28 11t11 27q0 17-10 31t-35 38l-80 78q-2 2-6 16v13q0 9 6.5 15.5T546-336ZM80-240v-400q0-66 47-113t113-47h480q66 0 113 47t47 113v400q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Z"/>
</svg>`,
})
export class MsrfGameButtonR2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
