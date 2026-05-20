import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-outpatient-med-icon',
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
  <path d="M120-760q-17 0-28.5-11.5T80-800q0-17 11.5-28.5T120-840h400q17 0 28.5 11.5T560-800q0 17-11.5 28.5T520-760H120Zm200 500q25 0 42.5-17.5T380-320v-40h40q25 0 42.5-17.5T480-420q0-25-17.5-42.5T420-480h-40v-40q0-25-17.5-42.5T320-580q-25 0-42.5 17.5T260-520v40h-40q-25 0-42.5 17.5T160-420q0 25 17.5 42.5T220-360h40v40q0 25 17.5 42.5T320-260ZM120-120q-33 0-56.5-23.5T40-200v-440q0-33 23.5-56.5T120-720h400q33 0 56.5 23.5T600-640v440q0 33-23.5 56.5T520-120H120Zm631-248q-12-12-12-28.5t12-28.5l15-15h-86q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520h86l-15-15q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l84 83q12 12 12 28t-12 28l-84 84q-12 12-28.5 12T751-368Z"/>
</svg>`,
})
export class MsrfOutpatientMedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
