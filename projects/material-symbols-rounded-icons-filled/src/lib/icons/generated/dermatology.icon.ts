import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-dermatology-icon',
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
  <path d="M120-120q-17 0-28.5-11.5T80-160v-320q0-33 23.5-56.5T160-560h160q8 0 15.5 3t13 8.5q5.5 5.5 8.5 13t3 15.5v40q0 50 35 85t85 35q50 0 85-35t35-85v-40q0-8 3-15.5t8.5-13q5.5-5.5 13-8.5t15.5-3h160q33 0 56.5 23.5T880-480v320q0 17-11.5 28.5T840-120H120Zm360-320q-17 0-28.5-11.5T440-480q0-109 25-215t109-175q13-11 29-9.5t27 14.5q11 13 9.5 29T625-809q-70 59-87.5 148T520-480q0 17-11.5 28.5T480-440ZM230-340q13 0 21.5-8.5T260-370q0-13-8.5-21.5T230-400q-13 0-21.5 8.5T200-370q0 13 8.5 21.5T230-340Zm40 100q13 0 21.5-8.5T300-270q0-13-8.5-21.5T270-300q-13 0-21.5 8.5T240-270q0 13 8.5 21.5T270-240Zm460-100q13 0 21.5-8.5T760-370q0-13-8.5-21.5T730-400q-13 0-21.5 8.5T700-370q0 13 8.5 21.5T730-340Z"/>
</svg>`,
})
export class MsrfDermatologyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
