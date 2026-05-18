import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-family-home-icon',
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
  <path d="M480-254q8 0 14.5-2.5T507-264q32-29 61-57t50.5-55q21.5-27 34.5-52.5t13-49.5q0-44-30-73t-72-29q-26 0-47.5 10.5T480-542q-15-17-37.5-27.5T396-580q-42 0-72 29t-30 73q0 24 13 49.5t34.5 52.5q21.5 27 50.5 55t61 57q6 5 12.5 7.5T480-254ZM240-120q-33 0-56.5-23.5T160-200v-295l-40 31q-14 10-30 8t-26-16q-10-14-7.5-30T72-528l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l360 275q13 10 15 26t-8 30q-10 13-26 15t-29-8l-41-30v295q0 33-23.5 56.5T720-120H240Z"/>
</svg>`,
})
export class MsrfFamilyHomeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
