import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-video-camera-back-add-icon',
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
  <path d="M400-480ZM160-160q-33 0-56.5-23.5T80-240v-200q0-17 11.5-28.5T120-480q17 0 28.5 11.5T160-440v200h480v-480H440q-17 0-28.5-11.5T400-760q0-17 11.5-28.5T440-800h200q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Zm119-265-55 73q-8 10-2 21t18 11h320q12 0 18-11t-2-21l-95-127q-6-8-16-8t-16 8l-89 119-49-65q-6-8-16-8t-16 8ZM160-640h-40q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720h40v-40q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v40h40q17 0 28.5 11.5T320-680q0 17-11.5 28.5T280-640h-40v40q0 17-11.5 28.5T200-560q-17 0-28.5-11.5T160-600v-40Z"/>
</svg>`,
})
export class MsrVideoCameraBackAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
