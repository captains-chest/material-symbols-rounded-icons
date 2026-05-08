import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-airplay-icon',
  standalone: true,
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200h-80q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280h80v-480H160v480h80q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200h-80q-33 0-56.5-23.5T80-280Zm232 160q-14 0-22-9.5t-8-20.5q0-5 2-10.5t7-10.5l161-161q6-6 13-9t15-3q8 0 15 3t13 9l161 161q5 5 7 10.5t2 10.5q0 11-8 20.5t-22 9.5H312Zm168-360Z"/>
</svg>`,
})
export class MsrAirplayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
