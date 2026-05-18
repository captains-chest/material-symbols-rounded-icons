import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-desktop-portrait-icon',
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
  <path d="M480-240h120q17 0 28.5-11.5T640-280v-280q0-17-11.5-28.5T600-600H480q-17 0-28.5 11.5T440-560v280q0 17 11.5 28.5T480-240ZM350-360q13 0 21.5-8.5T380-390v-250q0-8 6-14t14-6h90q13 0 21.5-8.5T520-690q0-13-8.5-21.5T490-720h-90q-33 0-56.5 23.5T320-640v250q0 13 8.5 21.5T350-360Zm450 200q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Z"/>
</svg>`,
})
export class MsrfDesktopPortraitIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
