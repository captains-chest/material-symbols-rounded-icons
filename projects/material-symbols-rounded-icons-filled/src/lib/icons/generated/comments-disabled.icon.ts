import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-comments-disabled-icon',
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
  <path d="M607-240H160q-33 0-56.5-23.5T80-320v-447l-25-25q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57L607-240Zm273-560v557q0 14-12 19t-22-5L675-400h5q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480h-85l-40-40h125q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H475l-40-40h245q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H355l-92-92q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h508q33 0 56.5 23.5T880-800ZM447-400l-80-80h-87q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400h167ZM327-520l-72-72q-7 5-11 13.5t-4 18.5q0 17 11.5 28.5T280-520h47Z"/>
</svg>`,
})
export class MsrfCommentsDisabledIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
