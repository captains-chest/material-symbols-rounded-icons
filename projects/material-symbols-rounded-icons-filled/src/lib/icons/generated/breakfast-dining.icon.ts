import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-breakfast-dining-icon',
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
  <path d="M240-120q-33 0-56.5-23.5T160-200v-342q-37-22-58.5-58.5T80-680q0-66 47-113t113-47h480q66 0 113 47t47 113q0 43-21.5 79.5T800-542v342q0 33-23.5 56.5T720-120H240Zm212-172q12 11 28.5 11t27.5-11l120-120q12-12 12-28.5T628-468L508-588q-11-12-27.5-12T452-588L332-468q-11 11-11 27.5t11 28.5l120 120Zm28-84-64-64 64-64 64 64-64 64Z"/>
</svg>`,
})
export class MsrfBreakfastDiningIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
