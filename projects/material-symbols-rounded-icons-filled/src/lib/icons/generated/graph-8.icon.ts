import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-graph-8-icon',
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
  <path d="M280-80q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-334q-35-12-57.5-43T160-760q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T320-647v167q25-19 55.5-29.5T440-520h80q50 0 85-35t35-85v-7q-35-12-57.5-43T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T720-647v7q0 83-58.5 141.5T520-440h-80q-50 0-85 35t-35 85v7q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Z"/>
</svg>`,
})
export class MsrfGraph8IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
