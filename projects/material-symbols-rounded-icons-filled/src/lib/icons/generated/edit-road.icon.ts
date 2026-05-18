import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-edit-road-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160q-17 0-28.5-11.5T160-200Zm240-480v-80q0-17 11.5-28.5T440-800q17 0 28.5 11.5T480-760v80q0 17-11.5 28.5T440-640q-17 0-28.5-11.5T400-680Zm0 240v-80q0-17 11.5-28.5T440-560q17 0 28.5 11.5T480-520v80q0 17-11.5 28.5T440-400q-17 0-28.5-11.5T400-440Zm0 240v-80q0-17 11.5-28.5T440-320q17 0 28.5 11.5T480-280v80q0 17-11.5 28.5T440-160q-17 0-28.5-11.5T400-200Zm200 40q-17 0-28.5-11.5T560-200v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-380L695-172q-6 6-13.5 9t-15.5 3h-66Zm223-224 37-39-37-37-38 38 38 38ZM680-520q-15 0-27.5-10T640-560v-200q0-17 11.5-28.5T680-800q17 0 28.5 11.5T720-760v200q0 20-12.5 30T680-520Z"/>
</svg>`,
})
export class MsrfEditRoadIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
