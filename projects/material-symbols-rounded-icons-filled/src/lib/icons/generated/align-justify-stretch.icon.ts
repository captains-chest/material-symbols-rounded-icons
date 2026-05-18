import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-align-justify-stretch-icon',
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
  <path d="M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Zm-720 0q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm440-480q-17 0-28.5-11.5T520-600v-40q0-17 11.5-28.5T560-680h120q17 0 28.5 11.5T720-640v40q0 17-11.5 28.5T680-560H560Zm-280 0q-17 0-28.5-11.5T240-600v-40q0-17 11.5-28.5T280-680h120q17 0 28.5 11.5T440-640v40q0 17-11.5 28.5T400-560H280Zm280 280q-17 0-28.5-11.5T520-320v-40q0-17 11.5-28.5T560-400h120q17 0 28.5 11.5T720-360v40q0 17-11.5 28.5T680-280H560Zm-280 0q-17 0-28.5-11.5T240-320v-40q0-17 11.5-28.5T280-400h120q17 0 28.5 11.5T440-360v40q0 17-11.5 28.5T400-280H280Z"/>
</svg>`,
})
export class MsrfAlignJustifyStretchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
