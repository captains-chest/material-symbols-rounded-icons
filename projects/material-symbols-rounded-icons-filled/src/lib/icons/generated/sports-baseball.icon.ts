import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-sports-baseball-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M167-231q-42-54-64.5-117.5T80-480q0-68 22.5-131.5T167-729q58 45 91 110.5T291-480q0 73-33 138.5T167-231ZM480-80q-72 0-137.5-24T223-174q69-57 108-136.5T370-480q0-90-39-169.5T223-786q54-46 119.5-70T480-880q72 0 137.5 24T737-786q-69 57-108 136.5T590-480q0 90 39 169.5T737-174q-54 46-119.5 70T480-80Zm313-151q-58-45-91-110.5T669-480q0-73 33-138.5T793-729q42 54 64.5 117.5T880-480q0 68-22.5 131.5T793-231Z"/>
</svg>`,
})
export class MsrfSportsBaseballIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
