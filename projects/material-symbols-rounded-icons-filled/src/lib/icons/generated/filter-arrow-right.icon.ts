import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-filter-arrow-right-icon',
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
  <path d="M767-320H640q-17 0-28.5-11.5T600-360q0-17 11.5-28.5T640-400h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L788-228q-11 11-27.5 11.5T732-228q-11-11-11-28t11-28l35-36ZM440-468l198-252H242l198 252Zm-80 28L129-735q-5-6-7-12.5t-2-12.5q0-16 11.5-28t28.5-12h560q17 0 28.5 12t11.5 28q0 6-2 12.5t-7 12.5L520-440v240q0 17-11.5 28.5T480-160h-80q-17 0-28.5-11.5T360-200v-240Z"/>
</svg>`,
})
export class MsrfFilterArrowRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
