import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signal-cellular-3-bar-icon',
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
  <path d="M177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l664-664q6-6 13-9t15-3q16 0 28 11.5t12 29.5v643q0 25-17.5 42.5T820-80H177Zm423-80h200v-526L600-486v326Z"/>
</svg>`,
})
export class MsrfSignalCellular3BarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
