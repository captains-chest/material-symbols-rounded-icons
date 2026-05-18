import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tapas-icon',
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
  <path d="M280-40q-17 0-28.5-11.5T240-80v-320h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-40h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-40q0-17 11.5-28.5T280-920q17 0 28.5 11.5T320-880v40h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v40h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v320q0 17-11.5 28.5T280-40Zm400-80v-286q-53-14-86.5-56.5T560-560v-320q0-17 11.5-28.5T600-920h240q17 0 28.5 11.5T880-880v320q0 55-33.5 97.5T760-406v286h40q17 0 28.5 11.5T840-80q0 17-11.5 28.5T800-40H640q-17 0-28.5-11.5T600-80q0-17 11.5-28.5T640-120h40Zm-40-600h160v-120H640v120Z"/>
</svg>`,
})
export class MsrfTapasIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
