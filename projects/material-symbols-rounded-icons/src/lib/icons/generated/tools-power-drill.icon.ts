import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tools-power-drill-icon',
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
  <path d="M240-200h240v-40H240v40Zm30-360h180q12 0 21-9t9-21q0-12-9-21t-21-9H270q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-100h180q12 0 21-9t9-21q0-12-9-21t-21-9H270q-12 0-21 9t-9 21q0 12 9 21t21 9Zm370 140v-80h80v-80h-80v-80h80q33 0 56.5 23.5T800-680h80q17 0 28.5 11.5T920-640q0 17-11.5 28.5T880-600h-80q0 33-23.5 56.5T720-520h-80ZM480-320h-80v-200h160v-240H240q-33 0-56.5 23.5T160-680v80q0 33 23.5 56.5T240-520h80v200h-80v-120q-66 0-113-47T80-600v-80q0-66 47-113t113-47h320q33 0 56.5 23.5T640-760v240q0 33-23.5 56.5T560-440h-80v120ZM220-120q-25 0-42.5-17.5T160-180v-80q0-25 17.5-42.5T220-320h280q25 0 42.5 17.5T560-260v80q0 25-17.5 42.5T500-120H220Zm140-520Zm120 440H240h240Z"/>
</svg>`,
})
export class MsrToolsPowerDrillIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
