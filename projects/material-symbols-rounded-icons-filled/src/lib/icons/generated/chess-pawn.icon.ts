import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chess-pawn-icon',
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
  <path d="M240-80q-33 0-56.5-23.5T160-160v-79q0-20 9-37t24-29q69-56 103.5-113T345-520h-65q-17 0-28.5-11.5T240-560q0-17 11.5-28.5T280-600h50q-14-22-22-47t-8-53q0-75 52.5-127.5T480-880q75 0 127.5 52.5T660-700q0 28-8 53t-22 47h50q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520h-65q14 45 48.5 102T767-305q15 12 24 29t9 37v79q0 33-23.5 56.5T720-80H240Z"/>
</svg>`,
})
export class MsrfChessPawnIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
