import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-settings-seating-icon',
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
  <path d="M320-80q-17 0-28.5-11.5T280-120q0-17 11.5-28.5T320-160q17 0 28.5 11.5T360-120q0 17-11.5 28.5T320-80Zm160 0q-17 0-28.5-11.5T440-120q0-17 11.5-28.5T480-160q17 0 28.5 11.5T520-120q0 17-11.5 28.5T480-80Zm160 0q-17 0-28.5-11.5T600-120q0-17 11.5-28.5T640-160q17 0 28.5 11.5T680-120q0 17-11.5 28.5T640-80ZM360-240q-17 0-28.5-11.5T320-280v-80h-6q-32 0-55-21t-25-52l-30-364q-2-17 10-30t29-13h55q45 0 78 28t41 72l23 140h160q66 0 113 47t47 113v40q0 17-11.5 28.5T720-360h-40v80q0 17-11.5 28.5T640-240q-17 0-28.5-11.5T600-280v-80H400v80q0 17-11.5 28.5T360-240Zm320-200q0-33-23.5-56.5T600-520H372l-34-206q-2-15-13.5-24.5T298-760h-11l27 320h366Zm-366 0Z"/>
</svg>`,
})
export class MsrSettingsSeatingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
