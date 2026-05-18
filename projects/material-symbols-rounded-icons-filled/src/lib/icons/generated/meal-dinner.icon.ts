import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-meal-dinner-icon',
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
  <path d="M322-400q-100 0-171-70T80-640q0-94 62.5-161T295-878q13-2 20 10t-1 24q-11 20-16 40.5t-5 43.5q0 75 52.5 127.5T473-580q12 0 24-1.5t23-4.5q14-4 23.5 5t5.5 21q-26 71-87.5 115.5T322-400Zm398-120h80v-120h-80v120ZM80-80q-17 0-28.5-11.5T40-120q0-17 11.5-28.5T80-160h40q-1-3-1.5-5.5T117-171l-25-99q-5-19 7-34.5t32-15.5h378q20 0 32 15.5t7 34.5l-25 99q-1 3-1.5 5.5T520-160h200v-127q-36-13-58-44t-22-69v-280q0-17 11.5-28.5T680-720h160q17 0 28.5 11.5T880-680v280q0 38-22 69t-58 44v127h80q17 0 28.5 11.5T920-120q0 17-11.5 28.5T880-80H80Z"/>
</svg>`,
})
export class MsrfMealDinnerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
