import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-print-error-icon',
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
  <path d="M80-520q0-51 35-85.5t85-34.5h640q17 0 28.5 11.5T880-600q0 17-11.5 28.5T840-560H200q-17 0-28.5 11.5T160-520v160h80q0-33 23.5-56.5T320-440h280q17 0 28.5 11.5T640-400q0 17-11.5 28.5T600-360H320v160h280q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H320q-33 0-56.5-23.5T240-200v-80h-80q-33 0-56.5-23.5T80-360v-160Zm160-120v-120q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v120h-80v-120H320v120h-80Zm520 520q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120Zm-40-200v-120q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v120q0 17-11.5 28.5T760-280q-17 0-28.5-11.5T720-320ZM160-560h560-560Z"/>
</svg>`,
})
export class MsrPrintErrorIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
