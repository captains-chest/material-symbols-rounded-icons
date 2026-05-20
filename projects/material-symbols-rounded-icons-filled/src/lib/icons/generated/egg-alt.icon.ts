import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-egg-alt-icon',
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
  <path d="M640-80q-67 0-101.5-22.5T480-150q-19-20-36.5-35T399-200q-45 0-100-15.5t-103.5-51Q147-302 114-359T80-499q-2-167 82.5-274T399-880q71 0 120 20.5t84.5 51.5q35.5 31 60 68.5T710-667q12 20 24 36.5t26 30.5q60 60 90 105t30 136q0 120-74.5 199.5T640-80ZM480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/>
</svg>`,
})
export class MsrfEggAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
