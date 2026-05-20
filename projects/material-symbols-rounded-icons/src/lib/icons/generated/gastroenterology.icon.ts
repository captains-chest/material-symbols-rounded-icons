import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-gastroenterology-icon',
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
  <path d="M120-320q0-50 35-85t85-35h80q50 0 85-35t35-85q0-17-11.5-28.5T400-600q-33 0-56.5-23.5T320-680v-160q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v160q50 0 85 35t35 85q0 83-58.5 141.5T320-360h-80q-17 0-28.5 11.5T200-320v200q0 17-11.5 28.5T160-80q-17 0-28.5-11.5T120-120v-200Zm160 160q0-50 35-85t85-35h160q83 0 141.5-58.5T760-480v-40q0-83-58.5-141.5T560-720q-33 0-56.5-23.5T480-800v-40q0-17 11.5-28.5T520-880q17 0 28.5 11.5T560-840v40q117 0 198.5 81.5T840-520v40q0 117-81.5 198.5T560-200H400q-17 0-28.5 11.5T360-160v40q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120v-40Zm-80 80v-240q0-17 11.5-28.5T240-360h80q83 0 141.5-58.5T520-560q0-50-35-85t-85-35v-200 200q50 0 85 35t35 85q0 83-58.5 141.5T320-360h-80q-17 0-28.5 11.5T200-320v240Z"/>
</svg>`,
})
export class MsrGastroenterologyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
