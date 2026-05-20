import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-table-sign-icon',
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
  <path d="M480-600ZM200-320q-33 0-56.5-23.5T120-400v-400q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v400q0 33-23.5 56.5T760-320h-92q-17 0-28.5-11.5T628-360q0-17 11.5-28.5T668-400h92v-400H200v400h92q17 0 28 11.5t11 28.5q0 17-11.5 28.5T291-320h-91Zm40 240q-17 0-28.5-11.5T200-120q0-17 11.5-28.5T240-160h200v-110q-18-11-29-29t-11-41q0-33 23-56.5t57-23.5q33 0 56.5 23.5T560-340q0 23-11 40.5T520-271v111h200q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm440-440q0-17-11.5-28.5T640-560H320q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480h320q17 0 28.5-11.5T680-520Zm0-160q0-17-11.5-28.5T640-720H320q-17 0-28.5 11.5T280-680q0 17 11.5 28.5T320-640h320q17 0 28.5-11.5T680-680Z"/>
</svg>`,
})
export class MsrTableSignIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
