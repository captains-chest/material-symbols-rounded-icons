import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-dashboard-customize-icon',
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
  <path d="M160-520q-17 0-28.5-11.5T120-560v-240q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v240q0 17-11.5 28.5T400-520H160Zm40-240v160-160Zm360 240q-17 0-28.5-11.5T520-560v-240q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v240q0 17-11.5 28.5T800-520H560Zm40-240v160-160ZM160-120q-17 0-28.5-11.5T120-160v-240q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v240q0 17-11.5 28.5T400-120H160Zm40-240v160-160Zm480 240q-17 0-28.5-11.5T640-160v-80h-81q-17 0-28-11.5T520-280q0-17 11.5-28.5T560-320h80v-81q0-17 11.5-28t28.5-11q17 0 28.5 11.5T720-400v80h81q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-240h-80v81q0 17-11.5 28T680-120Zm-80-640v160h160v-160H600Zm-400 0v160h160v-160H200Zm0 400v160h160v-160H200Z"/>
</svg>`,
})
export class MsrDashboardCustomizeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
