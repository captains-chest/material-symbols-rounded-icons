import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-desktop-cloud-stack-icon',
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
  <path d="M280-320h260q42 0 71-29.5t29-71.5q0-42-30-71t-72-29q-8-51-47-85t-91-34q-41 0-75 22t-51 59q-48 2-81 36.5T160-440q0 50 35 85t85 35Zm120-160ZM320-40q-17 0-28.5-11.5T280-80q0-17 11.5-28.5T320-120h20v-80H120q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h560q33 0 56.5 23.5T760-680v400q0 33-23.5 56.5T680-200H460v80h20q17 0 28.5 11.5T520-80q0 17-11.5 28.5T480-40H320Zm520-400v-400H240q-17 0-28.5-11.5T200-880q0-17 11.5-28.5T240-920h600q33 0 56.5 23.5T920-840v400q0 17-11.5 28.5T880-400q-17 0-28.5-11.5T840-440Z"/>
</svg>`,
})
export class MsrfDesktopCloudStackIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
