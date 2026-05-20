import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-data-table-icon',
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
  <path d="M120-640h720v-100q0-25-17.5-42.5T780-800H180q-25 0-42.5 17.5T120-740v100Zm0 240h720v-160H120v160Zm60 240h600q25 0 42.5-17.5T840-220v-100H120v100q0 25 17.5 42.5T180-160Zm20-520q-17 0-28.5-11.5T160-720q0-17 11.5-28.5T200-760q17 0 28.5 11.5T240-720q0 17-11.5 28.5T200-680Zm0 240q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520q17 0 28.5 11.5T240-480q0 17-11.5 28.5T200-440Zm0 240q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280q17 0 28.5 11.5T240-240q0 17-11.5 28.5T200-200Z"/>
</svg>`,
})
export class MsrfDataTableIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
