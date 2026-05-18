import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-edgesensor-high-icon',
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
  <path d="M40-280q-17 0-28.5-11.5T0-320v-200q0-17 11.5-28.5T40-560q17 0 28.5 11.5T80-520v200q0 17-11.5 28.5T40-280Zm120-120q-17 0-28.5-11.5T120-440v-200q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v200q0 17-11.5 28.5T160-400ZM320-80q-33 0-56.5-23.5T240-160v-640q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v640q0 33-23.5 56.5T640-80H320Zm320-120H320v40h320v-40ZM320-760h320v-40H320v40Zm480 480q-17 0-28.5-11.5T760-320v-200q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520v200q0 17-11.5 28.5T800-280Zm120-120q-17 0-28.5-11.5T880-440v-200q0-17 11.5-28.5T920-680q17 0 28.5 11.5T960-640v200q0 17-11.5 28.5T920-400ZM320-760v-40 40Zm0 560v40-40Zm0-80h320v-400H320v400Z"/>
</svg>`,
})
export class MsrEdgesensorHighIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
