import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chess-rook-icon',
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
  <path d="M240-80q-33 0-56.5-23.5T160-160v-85q0-17 7-32t20-26q68-62 103-131t50-126h-20q-33 0-56.5-23.5T240-640v-200q0-17 11.5-28.5T280-880h120q17 0 28.5 11.5T440-840v80h80v-80q0-17 11.5-28.5T560-880h120q17 0 28.5 11.5T720-840v200q0 33-23.5 56.5T640-560h-21q16 57 51 126t103 131q13 11 20 26.5t7 32.5v84q0 33-23.5 56.5T720-80H240Z"/>
</svg>`,
})
export class MsrfChessRookIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
