import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-format-image-back-icon',
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
  <path d="M800-120H160q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120Zm0-160H160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h120v-80H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h120v-80H160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H680v80h120q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H680v80h120q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280Zm-440-80h240v-80H360v80Zm0-160h240v-80H360v80Zm440-240H160q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760ZM480-440Zm0-80Z"/>
</svg>`,
})
export class MsrFormatImageBackIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
