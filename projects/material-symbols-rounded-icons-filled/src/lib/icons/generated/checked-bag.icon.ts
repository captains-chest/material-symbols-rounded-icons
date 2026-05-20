import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-checked-bag-icon',
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
  <path d="M340-280v-440h20q0-50 35-85t85-35q50 0 85 35t35 85h20v440H340Zm80-440h120q0-26-17-43t-43-17q-26 0-43 17t-17 43Zm260 440v-440h40q33 0 56.5 23.5T800-640v280q0 33-23.5 56.5T720-280h-40Zm-440 0q-33 0-56.5-23.5T160-360v-280q0-33 23.5-56.5T240-720h40v440h-40ZM120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Z"/>
</svg>`,
})
export class MsrfCheckedBagIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
