import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-pixel-3-3xl-3a-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M360 336q17 0 28.5-11.5T400 296q0-17-11.5-28.5T360 256q-17 0-28.5 11.5T320 296q0 17 11.5 28.5T360 336Zm-80 680q-33 0-56.5-23.5T200 936V216q0-33 23.5-56.5T280 136h400q33 0 56.5 23.5T760 216v720q0 33-23.5 56.5T680 1016H280Zm0-80h400V216H280v720Zm0 0V216v720Z"/>
</svg>`,
})
export class MsrPixel33xl3aIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
