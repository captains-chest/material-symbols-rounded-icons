import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-table-view-icon',
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
  <path d="M360-120q-33 0-56.5-23.5T280-200v-400q0-33 23.5-56.5T360-680h400q33 0 56.5 23.5T840-600v400q0 33-23.5 56.5T760-120H360Zm40-400h320q17 0 28.5-11.5T760-560q0-17-11.5-28.5T720-600H400q-17 0-28.5 11.5T360-560q0 17 11.5 28.5T400-520Zm120 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM360-360h80v-80h-40q-17 0-28.5 11.5T360-400v40Zm320 0h80v-40q0-17-11.5-28.5T720-440h-40v80Zm-240 80h-80v40q0 17 11.5 28.5T400-200h40v-80Zm240 0v80h40q17 0 28.5-11.5T760-240v-40h-80ZM120-760q0-33 23.5-56.5T200-840h440q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H200v440q0 17-11.5 28.5T160-280q-17 0-28.5-11.5T120-320v-440Z"/>
</svg>`,
})
export class MsrTableViewIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
