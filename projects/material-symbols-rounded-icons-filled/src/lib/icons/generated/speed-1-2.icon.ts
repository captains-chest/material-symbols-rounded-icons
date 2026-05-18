import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-speed-1-2-icon',
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
  <path d="M320-280q-17 0-28.5-11.5T280-320v-280h-40q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680h40q33 0 56.5 23.5T360-600v280q0 17-11.5 28.5T320-280Zm280 0q-33 0-56.5-23.5T520-360v-80q0-33 23.5-56.5T600-520h80v-80H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h120q33 0 56.5 23.5T760-600v80q0 33-23.5 56.5T680-440h-80v80h120q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H600Zm-160 0q-17 0-28.5-11.5T400-320q0-17 11.5-28.5T440-360q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280Z"/>
</svg>`,
})
export class MsrfSpeed12IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
