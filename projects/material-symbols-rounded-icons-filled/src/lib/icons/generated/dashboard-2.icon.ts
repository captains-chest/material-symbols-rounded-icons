import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-dashboard-2-icon',
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
  <path d="M640-160q-17 0-28.5-11.5T600-200v-200q0-17 11.5-28.5T640-440h200q17 0 28.5 11.5T880-400v200q0 17-11.5 28.5T840-160H640ZM480-520q-17 0-28.5-11.5T440-560v-200q0-17 11.5-28.5T480-800h360q17 0 28.5 11.5T880-760v200q0 17-11.5 28.5T840-520H480ZM120-160q-17 0-28.5-11.5T80-200v-200q0-17 11.5-28.5T120-440h360q17 0 28.5 11.5T520-400v200q0 17-11.5 28.5T480-160H120Zm0-360q-17 0-28.5-11.5T80-560v-200q0-17 11.5-28.5T120-800h200q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Z"/>
</svg>`,
})
export class MsrfDashboard2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
