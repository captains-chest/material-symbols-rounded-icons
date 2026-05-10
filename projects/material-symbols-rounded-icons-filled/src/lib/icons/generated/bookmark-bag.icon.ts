import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-bookmark-bag-icon',
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
  <path d="M430-360q13 0 21.5-8.5T460-390v-10h40v10q0 13 8.5 21.5T530-360q13 0 21.5-8.5T560-390v-10q17 0 28.5-11.5T600-440v-160q0-17-11.5-28.5T560-640h-20v-40q0-17-11.5-28.5T500-720h-40q-17 0-28.5 11.5T420-680v40h-20q-17 0-28.5 11.5T360-600v160q0 17 11.5 28.5T400-400v10q0 13 8.5 21.5T430-360Zm30-280v-40h40v40h-40Zm20 400-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Z"/>
</svg>`,
})
export class MsrfBookmarkBagIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
