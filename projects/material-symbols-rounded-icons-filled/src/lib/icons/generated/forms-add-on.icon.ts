import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-forms-add-on-icon',
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
  <path d="M680-121q-17 0-28.5-11.5T640-161v-80h-80q-17 0-28.5-11.5T520-281q0-17 11.5-28.5T560-321h80v-80q0-17 11.5-28.5T680-441q17 0 28.5 11.5T720-401v80h80q17 0 28.5 11.5T840-281q0 17-11.5 28.5T800-241h-80v80q0 17-11.5 28.5T680-121ZM320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320h100q17 0 28.5 11.5T460-280q0 17-11.5 28.5T420-240H320Zm0-160q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480h100q17 0 28.5 11.5T460-440q0 17-11.5 28.5T420-400H320Zm0-160q-17 0-28.5-11.5T280-600q0-17 11.5-28.5T320-640h400q17 0 28.5 11.5T760-600q0 17-11.5 28.5T720-560H320Zm0-160q-17 0-28.5-11.5T280-760q0-17 11.5-28.5T320-800h400q17 0 28.5 11.5T760-760q0 17-11.5 28.5T720-720H320Zm-160 0q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760q0 17-11.5 28.5T160-720Zm0 160q-17 0-28.5-11.5T120-600q0-17 11.5-28.5T160-640q17 0 28.5 11.5T200-600q0 17-11.5 28.5T160-560Zm0 160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480q17 0 28.5 11.5T200-440q0 17-11.5 28.5T160-400Zm0 160q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320q17 0 28.5 11.5T200-280q0 17-11.5 28.5T160-240Z"/>
</svg>`,
})
export class MsrfFormsAddOnIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
