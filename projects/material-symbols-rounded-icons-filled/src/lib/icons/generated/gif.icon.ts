import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-gif-icon',
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
  <path d="M490-360q-13 0-21.5-8.5T460-390v-180q0-13 8.5-21.5T490-600q13 0 21.5 8.5T520-570v180q0 13-8.5 21.5T490-360Zm-250 0q-18 0-29-12.5T200-400v-160q0-15 11-27.5t29-12.5h130q13 0 21.5 8.5T400-570q0 13-8.5 21.5T370-540H260v120h80v-30q0-13 8.5-21.5T370-480q13 0 21.5 8.5T400-450v50q0 15-11 27.5T360-360H240Zm370 0q-13 0-21.5-8.5T580-390v-180q0-13 8.5-21.5T610-600h120q13 0 21.5 8.5T760-570q0 13-8.5 21.5T730-540h-90v40h50q13 0 21.5 8.5T720-470q0 13-8.5 21.5T690-440h-50v50q0 13-8.5 21.5T610-360Z"/>
</svg>`,
})
export class MsrfGifIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
