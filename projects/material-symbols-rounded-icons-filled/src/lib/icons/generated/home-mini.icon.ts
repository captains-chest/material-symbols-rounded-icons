import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-home-mini-icon',
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
  <path d="M480-760q76 0 148 18.5t128 54q56 35.5 90 87.5t34 120H80q0-68 34-120t90-87.5q56-35.5 128-54T480-760ZM360-200q-94 0-167.5-55.5T92-400h776q-27 89-100.5 144.5T600-200H360Z"/>
</svg>`,
})
export class MsrfHomeMiniIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
