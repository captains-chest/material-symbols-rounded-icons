import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-format-list-numbered-rtl-icon',
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
  <path d="M710-80q-13 0-21.5-8.5T680-110q0-13 8.5-21.5T710-140h70v-30h-30q-13 0-21.5-8.5T720-200q0-13 8.5-21.5T750-230h30v-30h-70q-13 0-21.5-8.5T680-290q0-13 8.5-21.5T710-320h90q17 0 28.5 11.5T840-280v40q0 17-11.5 28.5T800-200q17 0 28.5 11.5T840-160v40q0 17-11.5 28.5T800-80h-90Zm0-280q-13 0-21.5-8.5T680-390v-80q0-17 11.5-28.5T720-510h60v-30h-70q-13 0-21.5-8.5T680-570q0-13 8.5-21.5T710-600h90q17 0 28.5 11.5T840-560v70q0 17-11.5 28.5T800-450h-60v30h70q13 0 21.5 8.5T840-390q0 13-8.5 21.5T810-360H710Zm60-280q-13 0-21.5-8.5T740-670v-150h-30q-13 0-21.5-8.5T680-850q0-13 8.5-21.5T710-880h60q13 0 21.5 8.5T800-850v180q0 13-8.5 21.5T770-640ZM160-200q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h400q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200H160Zm0-240q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h400q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440H160Zm0-240q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h400q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680H160Z"/>
</svg>`,
})
export class MsrfFormatListNumberedRtlIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
