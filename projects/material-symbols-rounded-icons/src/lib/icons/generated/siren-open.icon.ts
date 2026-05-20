import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-siren-open-icon',
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
  <path d="M467-360Zm-24 80ZM160-120q-33 0-56.5-23.5T80-200v-80q0-33 23.5-56.5T160-360h40v-200q0-117 81.5-198.5T480-840q117 0 198.5 81.5T760-560v3q0 17-11.5 28.5T720-517q-17 0-28.5-11.5T680-557v-3q0-83-58.5-141.5T480-760q-83 0-141.5 58.5T280-560v200h147q17 0 28.5 11.5T467-320q0 17-11.5 28.5T427-280H160v80h267q17 0 28.5 11.5T467-160q0 17-11.5 28.5T427-120H160Zm560 80q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm40-212v72q0 8 6 14t14 6q8 0 14-6t6-14v-100q0-17-11.5-28.5T760-320H660q-8 0-14 6t-6 14q0 8 6 14t14 6h72l-98 97q-6 6-6 14.5t6 14.5q6 6 14.5 6t14.5-6l97-98ZM400-560q0-33 23.5-56.5T480-640q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720q-66 0-113 47t-47 113v80q0 17 11.5 28.5T360-440q17 0 28.5-11.5T400-480v-80Z"/>
</svg>`,
})
export class MsrSirenOpenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
