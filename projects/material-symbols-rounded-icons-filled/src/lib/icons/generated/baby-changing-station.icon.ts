import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-baby-changing-station-icon',
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
  <path d="M160-80q-17 0-28.5-11.5T120-120v-347q0-7 1-13.5t3-12.5l59-172q8-26 30-40.5t47-14.5q8 0 16 1.5t16 5.5l166 73h62q17 0 28.5 11.5T560-600q0 17-11.5 28.5T520-560h-63q-8 0-16-2t-16-5l-93-40-52 157v330q0 17-11.5 28.5T240-80h-80Zm240-120q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h400q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H400Zm380-120q-25 0-42.5-17.5T720-380q0-25 17.5-42.5T780-440q25 0 42.5 17.5T840-380q0 25-17.5 42.5T780-320Zm-260 0q-33 0-56.5-23.5T440-400v-40h-40q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h80q17 0 28.5 11.5T520-480v40h80v-40q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v80q0 33-23.5 56.5T600-320h-80ZM320-760q-33 0-56.5-23.5T240-840q0-33 23.5-56.5T320-920q33 0 56.5 23.5T400-840q0 33-23.5 56.5T320-760Z"/>
</svg>`,
})
export class MsrfBabyChangingStationIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
