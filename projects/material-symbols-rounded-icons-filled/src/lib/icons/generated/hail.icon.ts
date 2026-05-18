import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-hail-icon',
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
  <path d="M160-120v-160q0-17 11.5-28.5T200-320h40q17 0 28.5 11.5T280-280v160q0 17-11.5 28.5T240-80h-40q-17 0-28.5-11.5T160-120Zm200 0v-436q-42 14-58.5 49T281-431q-2 14-14 22.5t-27 8.5q-16 0-28-10t-10-25q11-113 84-179t194-66q90 0 139.5-40.5T678-842q2-17 13.5-27.5T720-880q17 0 28.5 11t9.5 27q-8 75-45.5 133.5T600-624v504q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-200h-80v200q0 17-11.5 28.5T400-80q-17 0-28.5-11.5T360-120Zm120-600q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
</svg>`,
})
export class MsrfHailIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
