import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-imagesearch-roller-icon',
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
  <path d="M600-40H440q-17 0-28.5-11.5T400-80v-240q0-17 11.5-28.5T440-360h40v-120H160q-33 0-56.5-23.5T80-560v-160q0-33 23.5-56.5T160-800h80v-40q0-17 11.5-28.5T280-880h480q17 0 28.5 11.5T800-840v160q0 17-11.5 28.5T760-640H280q-17 0-28.5-11.5T240-680v-40h-80v160h320q33 0 56.5 23.5T560-480v120h40q17 0 28.5 11.5T640-320v240q0 17-11.5 28.5T600-40Z"/>
</svg>`,
})
export class MsrfImagesearchRollerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
