import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-chrome-restore-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M400 736q-33 0-56.5-23.5T320 656V336q0-33 23.5-56.5T400 256h320q33 0 56.5 23.5T800 336v320q0 33-23.5 56.5T720 736H400Zm0-400v320h320V336H400ZM240 896q-33 0-56.5-23.5T160 816V477q0-17 11.5-28.5T200 437q17 0 28.5 11.5T240 477v339h339q17 0 28.5 11.5T619 856q0 17-11.5 28.5T579 896H240Zm160-560v320-320Z"/>
</svg>`,
})
export class MsrChromeRestoreIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
