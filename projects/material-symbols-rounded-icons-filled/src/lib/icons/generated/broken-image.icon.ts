import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-broken-image-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-264l92 92q12 12 28 12t28-12l132-132 132 132q12 12 28 12t28-12l132-132 120 120v184q0 33-23.5 56.5T760-120H200Zm0-720h560q33 0 56.5 23.5T840-760v263l-92-92q-12-12-28-12t-28 12L560-457 428-589q-12-12-28-12t-28 12L240-457 120-577v-183q0-33 23.5-56.5T200-840Z"/>
</svg>`,
})
export class MsrfBrokenImageIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
