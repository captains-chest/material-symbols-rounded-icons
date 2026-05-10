import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-home-speaker-icon',
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
  <path d="m248-480 31-233q2-11 8.5-19.5T304-745l316-126q18-8 35 2.5t19 30.5l43 358H248Zm135 360q-73 0-121-54.5T224-301l13-99h489l12 101q8 72-39 125.5T580-120H383Z"/>
</svg>`,
})
export class MsrfHomeSpeakerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
