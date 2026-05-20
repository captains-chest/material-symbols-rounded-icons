import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-align-justify-center-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M480-80q-17 0-28.5-11.5T440-120v-720q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v720q0 17-11.5 28.5T480-80Zm160-200q-17 0-28.5-11.5T600-320v-320q0-17 11.5-28.5T640-680h40q17 0 28.5 11.5T720-640v320q0 17-11.5 28.5T680-280h-40Zm-360 0q-17 0-28.5-11.5T240-320v-320q0-17 11.5-28.5T280-680h40q17 0 28.5 11.5T360-640v320q0 17-11.5 28.5T320-280h-40Z"/>
</svg>`,
})
export class MsrfAlignJustifyCenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
