import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-align-justify-flex-start-icon',
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
  <path d="M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm440-200q-17 0-28.5-11.5T520-320v-320q0-17 11.5-28.5T560-680h40q17 0 28.5 11.5T640-640v320q0 17-11.5 28.5T600-280h-40Zm-240 0q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680h40q17 0 28.5 11.5T400-640v320q0 17-11.5 28.5T360-280h-40Z"/>
</svg>`,
})
export class MsrfAlignJustifyFlexStartIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
