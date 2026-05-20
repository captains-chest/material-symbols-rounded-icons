import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-superscript-icon',
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
  <path d="M800-600q-17 0-28.5-11.5T760-640v-40q0-17 11.5-28.5T800-720h80v-40H780q-8 0-14-6t-6-14q0-8 6-14t14-6h100q17 0 28.5 11.5T920-760v40q0 17-11.5 28.5T880-680h-80v40h100q8 0 14 6t6 14q0 8-6 14t-14 6H800ZM317-160q-27 0-39.5-23t1.5-46l141-222-128-201q-14-22-1.5-45t38.5-23q12 0 22 5.5t16 15.5l111 179h4l110-179q6-10 16.5-15.5T630-720q27 0 39 23t-2 46L539-451l142 222q14 23 1 46t-39 23q-12 0-22-5.5T605-181L482-377h-4L355-181q-6 10-16.5 15.5T317-160Z"/>
</svg>`,
})
export class MsrfSuperscriptIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
