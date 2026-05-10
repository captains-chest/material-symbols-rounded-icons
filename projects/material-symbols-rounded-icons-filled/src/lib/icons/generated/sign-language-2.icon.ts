import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-sign-language-2-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-160q-50 0-85-35t-35-85v-320q0-17 11.5-28.5T80-640q17 0 28.5 11.5T120-600v120h40v-200q0-17 11.5-28.5T200-720q17 0 28.5 11.5T240-680v200h47q13-35 45.5-57.5T406-560h14q17 0 28.5 11.5T460-520q0 17-11.5 28.5T420-480h-20q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400h20q34 0 51.5 27.5T473-318l-55 98q-16 28-44 44t-60 16H160Zm520-254v174q0 17-11.5 28.5T640-200q-17 0-28.5-11.5T600-240v-125q21-5 43.5-18.5T680-414Zm200 94q-17 0-28.5-11.5T840-360v-120h-40v200q0 17-11.5 28.5T760-240q-17 0-28.5-11.5T720-280v-200h-47q-13 35-45.5 57.5T554-400h-14q-17 0-28.5-11.5T500-440q0-17 11.5-28.5T540-480h20q17 0 28.5-11.5T600-520q0-17-11.5-28.5T560-560h-19q-33 0-51-27.5t-2-54.5l55-98q16-28 44-44t60-16h153q50 0 85 35t35 85v320q0 17-11.5 28.5T880-320ZM280-546v-174q0-17 11.5-28.5T320-760q17 0 28.5 11.5T360-720v125q-21 5-43.5 18.5T280-546Z"/>
</svg>`,
})
export class MsrfSignLanguage2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
