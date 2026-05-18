import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-blinds-2-closed-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M222-160h516l-56-80h-42v20q0 17-11.5 28.5T600-180q-17 0-28.5-11.5T560-220v-20H278l-56 80Zm418-400h98l-56-80h-42v80ZM200-800q-17 0-28.5 11.5T160-760v40h640v-40q0-17-11.5-28.5T760-800H200Zm-40 80h640-640Zm480 360h98l-56-80h-42v80Zm-418 0h338v-80H278l-56 80Zm0-200h338v-80H278l-56 80Zm18 480q-33 0-56.5-23.5T160-160v-480h-40q-17 0-28.5-11.5T80-680v-80q0-50 35-85t85-35h560q50 0 85 35t35 85v80q0 17-11.5 28.5T840-640h-40v480q0 33-23.5 56.5T720-80H240Z"/>
</svg>`,
})
export class MsrBlinds2ClosedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
