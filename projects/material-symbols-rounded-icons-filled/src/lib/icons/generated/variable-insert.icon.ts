import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-variable-insert-icon',
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
  <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v80q0 17-11.5 28.5T800-520H640q-33 0-56.5 23.5T560-440v120q0 17-11.5 28.5T520-280H160Zm560-23v83q0 17-11.5 28.5T680-180q-17 0-28.5-11.5T640-220v-180q0-17 11.5-28.5T680-440h180q17 0 28.5 11.5T900-400q0 17-11.5 28.5T860-360h-84l116 115q12 12 12 28.5T892-188q-12 12-28.5 12T835-188L720-303Z"/>
</svg>`,
})
export class MsrfVariableInsertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
