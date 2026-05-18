import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-earbuds-battery-icon',
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
  <path d="M720-680v-20q0-8 6-14t14-6h40q8 0 14 6t6 14v20h40q17 0 28.5 11.5T880-640v360q0 17-11.5 28.5T840-240H680q-17 0-28.5-11.5T640-280v-360q0-17 11.5-28.5T680-680h40Zm0 360h80-80Zm-505 80q-57 0-96-39t-39-96v-265q0-33 23.5-56.5T160-720q33 0 56.5 23.5T240-640q0 33-23.5 56.5T160-560q-5 0-10-1t-10-3v189q0 32 21.5 53.5T215-300q32 0 53.5-21.5T290-375v-210q0-57 39-96t96-39q57 0 96 39t39 96v265q0 33-23.5 56.5T480-240q-33 0-56.5-23.5T400-320q0-33 23.5-56.5T480-400q5 0 10 1t10 3v-189q0-32-21.5-53.5T425-660q-32 0-53.5 21.5T350-585v210q0 57-39 96t-96 39Zm505-80h80v-280h-80v280Z"/>
</svg>`,
})
export class MsrEarbudsBatteryIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
