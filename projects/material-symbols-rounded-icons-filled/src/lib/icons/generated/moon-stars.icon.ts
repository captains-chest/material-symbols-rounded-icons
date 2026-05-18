import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-moon-stars-icon',
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
  <path d="M483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-124 68.5-225T331-857q14-5 29-3.5t25 9.5q8 7 12.5 19.5T402-799q2 79 32 150.5T520-521q56 56 128 86t151 32q21 0 32 3.5t18 11.5q8 10 10.5 26t-2.5 29q-46 115-148 184T483-80Zm89-588-64-64q-12-12-12-28t12-28l64-64q12-12 28-12t28 12l64 64q12 12 12 28t-12 28l-64 64q-12 12-28 12t-28-12Zm200 120-24-24q-12-12-12-28t12-28l24-24q12-12 28-12t28 12l24 24q12 12 12 28t-12 28l-24 24q-12 12-28 12t-28-12Z"/>
</svg>`,
})
export class MsrfMoonStarsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
