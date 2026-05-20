import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-bike-dock-icon',
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
  <path d="M158-120q-17 0-27.5-13T120-163q0-17 10-29.5t26-17.5l134-38 61-521q4-30 26.5-50.5T431-840h97q31 0 53.5 20.5T608-769l61 521 133 38q17 5 27.5 17t10.5 29q0 18-11.5 31T800-120H158Zm282-120h80v-480q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v480Z"/>
</svg>`,
})
export class MsrBikeDockIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
