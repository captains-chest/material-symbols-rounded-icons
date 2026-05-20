import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-group-off-icon',
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
  <path d="M791-57 623-224h57q0 26-19 45t-45 19H120q-33 0-56.5-23.5T40-240v-32q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q12 0 24.5.5T409-438l-42-42h-7q-66 0-113-47t-47-113v-7L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120h-5L755-320q-9-33-31.5-62.5T666-434Zm-104-79q19-28 28.5-60t9.5-67q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-49.5 113T595-480l-33-33Zm-58-58L291-784q16-8 33-12t36-4q66 0 113 47t47 113q0 19-4 36t-12 33Z"/>
</svg>`,
})
export class MsrfGroupOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
