import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-variable-insert-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v80q0 17-11.5 28.5T800-520q-17 0-28.5-11.5T760-560v-40H200v240h320q17 0 28.5 11.5T560-320q0 17-11.5 28.5T520-280H160Zm40-80v-240 240Zm520 57v83q0 17-11.5 28.5T680-180q-17 0-28.5-11.5T640-220v-180q0-17 11.5-28.5T680-440h180q17 0 28.5 11.5T900-400q0 17-11.5 28.5T860-360h-84l116 115q12 12 12 28.5T892-188q-12 12-28.5 12T835-188L720-303Z"/>
</svg>`,
})
export class MsrVariableInsertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
