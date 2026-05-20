import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-chrome-maximize-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M240 896q-33 0-56.5-23.5T160 816V336q0-33 23.5-56.5T240 256h480q33 0 56.5 23.5T800 336v480q0 33-23.5 56.5T720 896H240Zm0-80h480V336H240v480Zm0-480v480-480Z"/>
</svg>`,
})
export class MsrChromeMaximizeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
