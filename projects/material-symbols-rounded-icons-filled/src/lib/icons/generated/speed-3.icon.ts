import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-speed-3-icon',
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
  <path d="M513-328q30-14 44.5-48t-6.5-64q-44-63-88.5-122.5T372-682q-11-14-27.5-6.5T332-663q16 73 34 145t40 146q10 35 41.5 46.5T513-328ZM205-160q-22 0-40.5-9.5T135-198q-28-48-42-100.5T79-406q1-80 34-151.5T201-683q55-54 127-85.5T480-800q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-400q0 54-14 105t-40 97q-11 19-30 28.5t-40 9.5H205Z"/>
</svg>`,
})
export class MsrfSpeed3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
