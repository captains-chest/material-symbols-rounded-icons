import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-private-connectivity-icon',
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
  <path d="M480-200q-106 0-184.5-68.5T203-440h-83q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h83q14-103 92.5-171.5T480-760q106 0 184.5 68.5T757-520h83q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-83q-14 103-92.5 171.5T480-200Zm-80-140h160q17 0 28.5-11.5T600-380v-120q0-17-11.5-28.5T560-540v-36q0-35-23-59.5T480-660q-33 0-56.5 23.5T400-580v40q-17 0-28.5 11.5T360-500v120q0 17 11.5 28.5T400-340Zm80-70q-13 0-21.5-8.5T450-440q0-13 8.5-21.5T480-470q13 0 21.5 8.5T510-440q0 13-8.5 21.5T480-410Zm-40-130v-40q0-17 11.5-28.5T480-620q17 0 28.5 11.5T520-580v40h-80Z"/>
</svg>`,
})
export class MsrfPrivateConnectivityIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
