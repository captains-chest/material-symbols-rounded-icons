import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-new-label-icon',
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
  <path d="M240-160q-17 0-28.5-11.5T200-200v-80h-80q-17 0-28.5-11.5T80-320q0-17 11.5-28.5T120-360h80v-80q0-17 11.5-28.5T240-480q17 0 28.5 11.5T280-440v80h80q17 0 28.5 11.5T400-320q0 17-11.5 28.5T360-280h-80v80q0 17-11.5 28.5T240-160Zm280-40q-17 0-28.5-11.5T480-240v-120q0-33-23.5-56.5T400-440h-40v-40q0-33-23.5-56.5T280-560H160q-17 0-28.5-11.5T120-600v-80q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l141 200q15 21 15 46t-15 46L666-234q-11 16-28.5 25t-37.5 9h-80Z"/>
</svg>`,
})
export class MsrfNewLabelIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
