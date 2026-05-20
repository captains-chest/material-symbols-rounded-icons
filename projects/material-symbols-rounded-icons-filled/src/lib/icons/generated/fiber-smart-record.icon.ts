import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-fiber-smart-record-icon',
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
  <path d="M360-200q-117 0-198.5-81.5T80-480q0-117 81.5-198.5T360-760q117 0 198.5 81.5T640-480q0 117-81.5 198.5T360-200Zm340-19q-23 8-41.5-1.5T640-256q0-11 7.5-21t18.5-14q60-20 97-72t37-117q0-65-37-117t-97-72q-11-4-18.5-14t-7.5-21q0-25 18-35t41-2q81 29 131 100.5T880-480q0 89-50 160T700-219Z"/>
</svg>`,
})
export class MsrfFiberSmartRecordIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
