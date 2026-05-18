import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-earbuds-2-icon',
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
  <path d="M700-40q-25 0-42.5-17T640-100v-340q0-17 11.5-28.5T680-480h180q26 0 43 17.5t17 42.5v120q0 26-17 43t-43 17h-20v140q0 26-17 43t-43 17h-80ZM500-200q-67 0-115.5-46T336-360q0-67 48.5-113.5T500-520h40q17 0 28.5 11.5T580-480v240q0 17-11.5 28.5T540-200h-40ZM180-440q-26 0-43-17t-17-43v-140h-20q-26 0-43-17t-17-43v-120q0-25 17-42.5t43-17.5h180q17 0 28.5 11.5T320-840v340q0 26-17.5 43T260-440h-80Zm240-160q-17 0-28.5-11.5T380-640v-240q0-17 11.5-28.5T420-920h40q67 0 115.5 46.5T624-760q0 68-48.5 114T460-600h-40Z"/>
</svg>`,
})
export class MsrfEarbuds2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
