import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-hallway-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h120l132-132q12-12 28-12t28 12l132 132h120q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm250-200-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11h400q12 0 18-11t-2-21L586-419q-6-8-16-8t-16 8L450-280Zm-46-520h152l-76-76-76 76Z"/>
</svg>`,
})
export class MsrfHallwayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
