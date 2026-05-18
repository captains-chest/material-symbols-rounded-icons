import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chess-king-2-icon',
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
  <path d="M520-80v-355q0-20 1.5-40.5T538-510q44-42 100.5-66T760-600q66 0 113 47t47 113v200q0 66-47 113T760-80H520Zm-320 0q-66 0-113-47T40-240v-200q0-66 47-113t113-47q66 0 123.5 25T425-507q14 14 14.5 33t.5 39v355H200Zm240-594v-46h-80q-17 0-28.5-11.5T320-760q0-17 11.5-28.5T360-800h80v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80h80q17 0 28.5 11.5T640-760q0 17-11.5 28.5T600-720h-80v45q19 5 35 14t30 21q-29 14-55.5 33T480-565q-23-23-49.5-42T375-640q14-12 30.5-20.5T440-674Z"/>
</svg>`,
})
export class MsrfChessKing2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
