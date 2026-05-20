import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-dialpad-icon',
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
  <path d="M480-40q-33 0-56.5-23.5T400-120q0-33 23.5-56.5T480-200q33 0 56.5 23.5T560-120q0 33-23.5 56.5T480-40ZM240-760q-33 0-56.5-23.5T160-840q0-33 23.5-56.5T240-920q33 0 56.5 23.5T320-840q0 33-23.5 56.5T240-760Zm0 240q-33 0-56.5-23.5T160-600q0-33 23.5-56.5T240-680q33 0 56.5 23.5T320-600q0 33-23.5 56.5T240-520Zm0 240q-33 0-56.5-23.5T160-360q0-33 23.5-56.5T240-440q33 0 56.5 23.5T320-360q0 33-23.5 56.5T240-280Zm480-480q-33 0-56.5-23.5T640-840q0-33 23.5-56.5T720-920q33 0 56.5 23.5T800-840q0 33-23.5 56.5T720-760ZM480-280q-33 0-56.5-23.5T400-360q0-33 23.5-56.5T480-440q33 0 56.5 23.5T560-360q0 33-23.5 56.5T480-280Zm240 0q-33 0-56.5-23.5T640-360q0-33 23.5-56.5T720-440q33 0 56.5 23.5T800-360q0 33-23.5 56.5T720-280Zm0-240q-33 0-56.5-23.5T640-600q0-33 23.5-56.5T720-680q33 0 56.5 23.5T800-600q0 33-23.5 56.5T720-520Zm-240 0q-33 0-56.5-23.5T400-600q0-33 23.5-56.5T480-680q33 0 56.5 23.5T560-600q0 33-23.5 56.5T480-520Zm0-240q-33 0-56.5-23.5T400-840q0-33 23.5-56.5T480-920q33 0 56.5 23.5T560-840q0 33-23.5 56.5T480-760Z"/>
</svg>`,
})
export class MsrDialpadIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
