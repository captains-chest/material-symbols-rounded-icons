import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-bath-bedrock-icon',
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
  <path d="M281-712q-26-32-35-57.5t-5-55.5q4-30 15-44t31-11q18 2 27 16t6 35q-2 17 5 34t25 39q24 29 33.5 55.5T390-646q-3 26-15 38t-31 10q-17-2-26-14t-5-28q3-14-4.5-31T281-712Zm161 3q-26-32-35.5-57t-5.5-55q4-30 15.5-44t31.5-11q18 2 27 15.5t6 34.5q-2 17 4.5 34t24.5 39q24 29 33.5 55.5T550-643q-3 26-14.5 38.5T505-594q-17-2-26.5-14.5T473-637q3-14-4-31t-27-41Zm162 0q-26-32-35.5-57t-5.5-55q4-30 15.5-44t31.5-11q18 2 27 15.5t6 34.5q-2 17 4.5 34t24.5 39q24 29 33.5 55.5T712-643q-3 26-14.5 38.5T667-594q-17-2-26.5-14.5T635-637q3-14-4-31t-27-41ZM400-240q-17 0-28.5-11.5T360-280v-160q0-33 23.5-56.5T440-520h280q66 0 113 47t47 113v80q0 17-11.5 28.5T840-240H400Zm440 120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120ZM200-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
</svg>`,
})
export class MsrfBathBedrockIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
