import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrows-more-down-icon',
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
  <path d="M240-120q-17 0-28.5-11.5T200-160v-360q0-17 11.5-28.5T240-560q17 0 28.5 11.5T280-520v320h320q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H240Zm200-200q-17 0-28.5-11.5T400-360v-360q0-17 11.5-28.5T440-760q17 0 28.5 11.5T480-720v320h320q17 0 28.5 11.5T840-360q0 17-11.5 28.5T800-320H440Z"/>
</svg>`,
})
export class MsrfArrowsMoreDownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
