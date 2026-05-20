import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tile-large-icon',
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
  <path d="M120-160v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm400 0v-160q0-17 11.5-28.5T560-360h240q17 0 28.5 11.5T840-320v160q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160ZM120-480v-320q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800v320q0 17-11.5 28.5T800-440H160q-17 0-28.5-11.5T120-480Zm80 280h160v-80H200v80Zm400 0h160v-80H600v80Zm-320-40Zm400 0Z"/>
</svg>`,
})
export class MsrTileLargeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
