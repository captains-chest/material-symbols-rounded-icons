import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-share-windows-icon',
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
  <path d="M320-360q-17 0-28.5-11.5T280-400v-200q0-33 23.5-56.5T360-680h326l-75-75q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l144 144q12 12 12 28t-12 28L668-468q-11 11-27.5 11.5T612-468q-12-12-12.5-28.5T611-525l75-75H360v200q0 17-11.5 28.5T320-360ZM200-120q-33 0-56.5-23.5T120-200v-560q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v560h480v-120q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320v120q0 33-23.5 56.5T680-120H200Z"/>
</svg>`,
})
export class MsrfShareWindowsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
