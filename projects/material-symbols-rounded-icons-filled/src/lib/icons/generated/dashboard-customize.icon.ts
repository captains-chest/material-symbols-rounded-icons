import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-dashboard-customize-icon',
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
  <path d="M160-520q-17 0-28.5-11.5T120-560v-240q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v240q0 17-11.5 28.5T400-520H160Zm400 0q-17 0-28.5-11.5T520-560v-240q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v240q0 17-11.5 28.5T800-520H560ZM160-120q-17 0-28.5-11.5T120-160v-240q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v240q0 17-11.5 28.5T400-120H160Zm520 0q-17 0-28.5-11.5T640-160v-80h-81q-17 0-28-11.5T520-280q0-17 11.5-28.5T560-320h80v-81q0-17 11.5-28t28.5-11q17 0 28.5 11.5T720-400v80h81q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-240h-80v81q0 17-11.5 28T680-120Z"/>
</svg>`,
})
export class MsrfDashboardCustomizeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
