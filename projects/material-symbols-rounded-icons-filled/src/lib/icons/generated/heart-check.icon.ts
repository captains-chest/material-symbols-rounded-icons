import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-heart-check-icon',
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
  <path d="M887-539q11 12 11 28.5T887-482L745-341q-11 12-28 12t-28-12l-57-56q-12-12-12-28.5t12-28.5q12-11 28.5-11t28.5 11l28 28 113-113q12-11 28.5-11t28.5 11ZM413-143l-100-91q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 21.5t81 61.5q34-40 81-61.5t99-21.5q85 0 142.5 51.5T834-668q-20-8-42-10t-45-2q-85 0-156 68.5T520-440q0 48 21 97.5t59 80.5q-19 17-49.5 43.5T498-172l-32 29q-11 10-26.5 10T413-143Z"/>
</svg>`,
})
export class MsrfHeartCheckIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
