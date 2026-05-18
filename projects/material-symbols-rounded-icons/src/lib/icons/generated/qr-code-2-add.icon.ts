import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-qr-code-2-add-icon',
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
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M200-400v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm360-280v-80h80v80h-80ZM180-660h120v-120H180v120Zm0 480h120v-120H180v120Zm480-480h120v-120H660v120ZM360-400v-80h-80v-80h160v160h-80Zm40-200v-160h80v80h80v80H400Zm-190-90v-60h60v60h-60Zm0 480v-60h60v60h-60Zm480-480v-60h60v60h-60Zm-50 450h-80q-17 0-28.5-11.5T520-280q0-17 11.5-28.5T560-320h80v-80q0-17 11.5-28.5T680-440q17 0 28.5 11.5T720-400v80h80q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240h-80v80q0 17-11.5 28.5T680-120q-17 0-28.5-11.5T640-160v-80ZM120-640v-160q0-17 11.5-28.5T160-840h160q17 0 28.5 11.5T360-800v160q0 17-11.5 28.5T320-600H160q-17 0-28.5-11.5T120-640Zm0 480v-160q0-17 11.5-28.5T160-360h160q17 0 28.5 11.5T360-320v160q0 17-11.5 28.5T320-120H160q-17 0-28.5-11.5T120-160Zm480-480v-160q0-17 11.5-28.5T640-840h160q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H640q-17 0-28.5-11.5T600-640Z"/>
</svg>`,
})
export class MsrQrCode2AddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
