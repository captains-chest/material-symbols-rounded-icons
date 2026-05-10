import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-add-triangle-icon',
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
  <path d="M144-120q-35 0-52-30t0-60l336-580q9-15 23-22.5t29-7.5q15 0 29 7.5t23 22.5l336 580q17 30 0 60t-52 30H144Zm296-200v40q0 17 11.5 28.5T480-240q17 0 28.5-11.5T520-280v-40h40q17 0 28.5-11.5T600-360q0-17-11.5-28.5T560-400h-40v-40q0-17-11.5-28.5T480-480q-17 0-28.5 11.5T440-440v40h-40q-17 0-28.5 11.5T360-360q0 17 11.5 28.5T400-320h40Z"/>
</svg>`,
})
export class MsrfAddTriangleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
