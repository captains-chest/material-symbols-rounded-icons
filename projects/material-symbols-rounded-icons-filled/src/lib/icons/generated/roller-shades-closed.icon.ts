import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-roller-shades-closed-icon',
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
  <path d="M480-50q-29 0-49.5-20.5T410-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H550q0 29-20.5 49.5T480-50ZM240-200h200v-80H240v80Zm280 0h200v-80H520v80Z"/>
</svg>`,
})
export class MsrfRollerShadesClosedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
