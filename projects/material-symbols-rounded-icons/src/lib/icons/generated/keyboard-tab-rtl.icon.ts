import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-keyboard-tab-rtl-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M120-240q-17 0-28.5-11.5T80-280v-400q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v400q0 17-11.5 28.5T120-240Zm273-200 115 115q12 12 12 28.5T508-268q-12 11-28.5 11T452-268L268-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q12 12 11.5 28.5T508-636L393-520h447q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H393Z"/>
</svg>`,
})
export class MsrKeyboardTabRtlIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
