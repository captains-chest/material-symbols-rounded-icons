import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-house-siding-icon',
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
  <path d="M280-240v80q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-366l-80 61q-14 10-30 8.5T64-472q-10-14-8-30t16-26l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l359 275q13 10 15.5 26t-7.5 30q-10 14-26 15.5t-30-8.5l-80-61v366q0 17-11.5 28.5T720-120q-17 0-28.5-11.5T680-160v-80H280Zm0-240h400v-80H280v80Zm0 160h400v-80H280v80Zm70-320h260l-130-99-130 99Z"/>
</svg>`,
})
export class MsrHouseSidingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
