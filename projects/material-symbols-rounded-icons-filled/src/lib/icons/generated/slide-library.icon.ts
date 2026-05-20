import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-slide-library-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-400q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v400h520q17 0 28.5 11.5T720-200q0 17-11.5 28.5T680-160H160Zm160-160q-33 0-56.5-23.5T240-400v-320q0-33 23.5-56.5T320-800h216q17 0 28.5 11.5T576-760q0 17-11.5 28.5T536-720H320v320h480v-216q0-17 11.5-28.5T840-656q17 0 28.5 11.5T880-616v216q0 33-23.5 56.5T800-320H320Zm220-160q-19 0-36.5-6.5T472-506q-5-5-3-10.5t7-7.5q11-3 17.5-14t6.5-22q0-25 17.5-42.5T560-620q25 0 42.5 17.5T620-560q0 33-23.5 56.5T540-480Zm103-148-15-15q-12-12-12-28t12-28l122-121q12-12 28-12t28 12l14 14q12 12 12 28t-12 28L699-628q-12 12-28 12t-28-12Z"/>
</svg>`,
})
export class MsrfSlideLibraryIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
