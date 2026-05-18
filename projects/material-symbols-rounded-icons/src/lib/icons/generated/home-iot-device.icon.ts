import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-home-iot-device-icon',
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
  <path d="M221-240q42 0 71-29t29-71q0-24-11-47t-33-37l-36-24v-252q0-9-5.5-14.5T221-720q-9 0-14.5 5.5T201-700v252l-36 24q-22 15-33 37t-11 47q0 42 29 71t71 29Zm0 80q-75 0-127.5-52T41-340q0-48 22-86t58-62v-212q0-42 29-71t71-29q42 0 71 29t29 71v212q36 24 58 62t22 86q0 75-52.5 127.5T221-160Zm327-200q-48-33-78-85t-30-115q0-100 70-170t170-70q100 0 170 70t70 170q0 63-30 115t-78 85H548Zm28-80h212q27-24 39.5-54t12.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66t41.5 54Zm104 280q-24 0-42-18t-18-42h120q0 24-18 42t-42 18Zm-80-80q-17 0-28.5-11.5T560-280q0-17 11.5-28.5T600-320h160q17 0 28.5 11.5T800-280q0 17-11.5 28.5T760-240H600ZM221-340Zm459-240Z"/>
</svg>`,
})
export class MsrHomeIotDeviceIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
