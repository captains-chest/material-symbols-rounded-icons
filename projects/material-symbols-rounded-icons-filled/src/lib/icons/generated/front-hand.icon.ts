import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-front-hand-icon',
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
  <path d="M500-40q-142 0-241-99t-99-241v-380q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v240h80v-320q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v320h80v-360q0-17 11.5-28.5T520-920q17 0 28.5 11.5T560-880v360h80v-280q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v230q-29 21-44.5 53T660-450v50h-50q-63 0-106.5 43.5T460-250v50q0 13 8.5 21.5T490-170q13 0 21.5-8.5T520-200v-50q0-38 26-64t64-26h70q17 0 28.5-11.5T720-380v-70q0-38 26-64t64-26q13 0 21.5 8.5T840-510v130q0 142-99 241T500-40Z"/>
</svg>`,
})
export class MsrfFrontHandIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
