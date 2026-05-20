import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-siren-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M160-200h640v-80H160v80Zm240-360q0-33 23.5-56.5T480-640q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720q-66 0-113 47t-47 113v80q0 17 11.5 28.5T360-440q17 0 28.5-11.5T400-480v-80Zm80 280Zm-200-80h400v-200q0-83-58.5-141.5T480-760q-83 0-141.5 58.5T280-560v200ZM160-120q-33 0-56.5-23.5T80-200v-80q0-33 23.5-56.5T160-360h40v-200q0-117 81.5-198.5T480-840q117 0 198.5 81.5T760-560v200h40q33 0 56.5 23.5T880-280v80q0 33-23.5 56.5T800-120H160Zm320-240Z"/>
</svg>`,
})
export class MsrSirenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
