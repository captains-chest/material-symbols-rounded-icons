import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-exposure-plus-2-icon',
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
  <path d="M800-200H513q-12 0-20.5-8.5T484-229v-43q0-3 8-21l192-195q33-35 46.5-58.5T744-600q0-29-22.5-52.5T654-676q-26 0-44.5 10.5T578-638q-10 14-25.5 19t-30.5-1q-17-7-24.5-22.5t.5-29.5q21-35 60.5-61.5T656-760q83 0 129.5 47.5T832-600q0 45-21 82t-65 82L600-284l2 4h198q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200ZM240-400h-80q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h80v-80q0-17 11.5-28.5T280-600q17 0 28.5 11.5T320-560v80h80q17 0 28.5 11.5T440-440q0 17-11.5 28.5T400-400h-80v80q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-80Z"/>
</svg>`,
})
export class MsrfExposurePlus2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
