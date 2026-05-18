import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-trolley-cable-car-icon',
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
  <path d="M305-120q-23 0-32.5-21.5T280-180l20-20H160q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280v-440q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800h120v-40q0-17 11.5-28.5T320-880h320q17 0 28.5 11.5T680-840v40h120q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720v440q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H660l20 20q17 17 8 38.5T655-120q-7 0-13.5-2.5T630-130l-70-70H400l-70 70q-5 5-11.5 7.5T305-120Zm215-440h200v-120H520v120Zm-280 0h200v-120H240v120Zm240 240q25 0 42.5-17.5T540-380q0-25-17.5-42.5T480-440q-25 0-42.5 17.5T420-380q0 25 17.5 42.5T480-320Z"/>
</svg>`,
})
export class MsrfTrolleyCableCarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
