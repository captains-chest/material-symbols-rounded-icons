import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-camera-video-icon',
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
  <path d="M371-200h218l-20-80H391l-20 80Zm-11-160h240q83 0 141.5-58.5T800-560q0-83-58.5-141.5T600-760H360q-83 0-141.5 58.5T160-560q0 83 58.5 141.5T360-360Zm120-120q-33 0-56.5-23.5T400-560q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560q0 33-23.5 56.5T480-480ZM260-600q17 0 28.5-11.5T300-640q0-17-11.5-28.5T260-680q-17 0-28.5 11.5T220-640q0 17 11.5 28.5T260-600Zm-60 480q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h89l21-84q-99-17-164.5-94.5T80-560q0-117 81.5-198.5T360-840h240q117 0 198.5 81.5T880-560q0 104-65.5 181.5T650-284l21 84h89q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120H200Zm280-280q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160ZM371-200h218-218Z"/>
</svg>`,
})
export class MsrCameraVideoIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
