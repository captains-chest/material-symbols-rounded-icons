import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-laptop-chromebook-icon',
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
  <path d="M80-240v-520q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v520h40q17 0 28.5 11.5T960-200q0 17-11.5 28.5T920-160H40q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h40Zm340 0h120q8 0 14-6t6-14q0-8-6-14t-14-6H420q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
</svg>`,
})
export class MsrfLaptopChromebookIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
