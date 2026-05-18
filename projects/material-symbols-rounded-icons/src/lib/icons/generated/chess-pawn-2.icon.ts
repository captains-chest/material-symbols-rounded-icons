import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-chess-pawn-2-icon',
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
  <path d="M233-80q-30 0-50-22t-15-51q17-72 63-129t115-89q-32-29-49-67.5T280-520q0-54 26.5-100t73.5-73q-10-15-15-32t-5-35q0-50 35-85t85-35q50 0 85 35t35 85q0 18-5 35t-15 32q47 27 73.5 73T680-520q0 43-17.5 81.5T613-371q69 32 115 89t63 129q7 29-13 51t-51 22H233Zm247-240q-77 0-139 44t-88 116h453q-26-72-87.5-116T480-320Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-320q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Zm0-40Zm0 600Zm0-360Z"/>
</svg>`,
})
export class MsrChessPawn2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
