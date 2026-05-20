import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-water-bottle-large-icon',
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
  <path d="M280-80q-33 0-56.5-23.5T200-160v-80q0-33 23.5-56.5T280-320v-200q-33 0-56.5-23.5T200-600v-80q0-33 23.5-56.5T280-760h120v-40q-17 0-28.5-11.5T360-840q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840q0 17-11.5 28.5T560-800v40h120q33 0 56.5 23.5T760-680v80q0 33-23.5 56.5T680-520v200q33 0 56.5 23.5T760-240v80q0 33-23.5 56.5T680-80H280Zm0-80h400v-80h-80v-280h-40q-17 0-28.5-11.5T520-560q0-17 11.5-28.5T560-600h120v-80H280v80h80v280h40q17 0 28.5 11.5T440-280q0 17-11.5 28.5T400-240H280v80Zm200-260Z"/>
</svg>`,
})
export class MsrWaterBottleLargeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
