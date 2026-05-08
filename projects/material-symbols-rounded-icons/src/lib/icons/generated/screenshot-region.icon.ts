import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-screenshot-region-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M280-280h80q17 0 28.5 11.5T400-240q0 17-11.5 28.5T360-200H240q-17 0-28.5-11.5T200-240v-120q0-17 11.5-28.5T240-400q17 0 28.5 11.5T280-360v80Zm0-400v80q0 17-11.5 28.5T240-560q-17 0-28.5-11.5T200-600v-120q0-17 11.5-28.5T240-760h120q17 0 28.5 11.5T400-720q0 17-11.5 28.5T360-680h-80Zm400 0h-80q-17 0-28.5-11.5T560-720q0-17 11.5-28.5T600-760h120q17 0 28.5 11.5T760-720v120q0 17-11.5 28.5T720-560q-17 0-28.5-11.5T680-600v-80Zm0 480h-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v80h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-80Z"/>
</svg>`,
})
export class MsrScreenshotRegionIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
