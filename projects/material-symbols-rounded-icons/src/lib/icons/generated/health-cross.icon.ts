import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-health-cross-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M360-120q-17 0-28.5-11.5T320-160v-160H160q-17 0-28.5-11.5T120-360v-240q0-17 11.5-28.5T160-640h160v-160q0-17 11.5-28.5T360-840h240q17 0 28.5 11.5T640-800v160h160q17 0 28.5 11.5T840-600v240q0 17-11.5 28.5T800-320H640v160q0 17-11.5 28.5T600-120H360Zm40-80h160v-200h200v-160H560v-200H400v200H200v160h200v200Zm80-280Z"/>
</svg>`,
})
export class MsrHealthCrossIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
