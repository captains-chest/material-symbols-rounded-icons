import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-stockpot-icon',
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
  <path d="M240-160q-50 0-85-35t-35-85v-320q0-17 11.5-28.5T160-640h640q17 0 28.5 11.5T840-600v320q0 50-35 85t-85 35H240Zm-40-400v280q0 17 11.5 28.5T240-240h480q17 0 28.5-11.5T760-280v-280H200Zm160-200v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h200q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h200Zm120 360Z"/>
</svg>`,
})
export class MsrStockpotIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
