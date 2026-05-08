import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-line-start-arrow-notch-icon',
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
  <path d="m383-440 97 170q8 14-3 24.5t-25 2.5L133-446q-19-12-19-34t19-34l319-203q14-8 25 2.5t3 24.5l-97 170h457q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H383Z"/>
</svg>`,
})
export class MsrLineStartArrowNotchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
