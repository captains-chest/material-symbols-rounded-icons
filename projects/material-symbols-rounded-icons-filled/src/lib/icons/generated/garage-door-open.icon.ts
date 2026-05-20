import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-garage-door-open-icon',
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
  <path d="M320-460h320v-60H320v60Zm160-180q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720q-17 0-28.5 11.5T440-680q0 17 11.5 28.5T480-640ZM240-160q-33 0-56.5-23.5T160-240v-320h-59q-14 0-19-14t7-22l344-250q21-15 47-15t47 15l344 250q12 8 7 22t-19 14h-59v320q0 33-23.5 56.5T720-160h-40q-17 0-28.5-11.5T640-200v-200H320v200q0 17-11.5 28.5T280-160h-40Z"/>
</svg>`,
})
export class MsrfGarageDoorOpenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
