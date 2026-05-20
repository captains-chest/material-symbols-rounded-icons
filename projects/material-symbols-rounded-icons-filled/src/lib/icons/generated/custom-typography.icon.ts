import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-custom-typography-icon',
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
  <path d="M520-160v40q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-160q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v40h280q17 0 28.5 11.5T840-200q0 17-11.5 28.5T800-160H520Zm-360 0q-17 0-28.5-11.5T120-200q0-17 11.5-28.5T160-240h160q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160H160Zm224-363h193l34 98q4 11 14 18t22 7q20 0 32-17t4-36L533-854q-5-12-15-19t-23-7h-30q-13 0-23 7t-15 19L276-452q-7 19 4.5 35.5T312-400q13 0 22.5-7t14.5-19l35-97Zm24-69 70-199h4l70 199H408Z"/>
</svg>`,
})
export class MsrfCustomTypographyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
