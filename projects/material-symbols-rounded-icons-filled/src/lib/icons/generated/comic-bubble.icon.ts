import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-comic-bubble-icon',
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
  <path d="M828-132q-8 8-20.5 11t-25.5-4L556-240l-88 88q-12 12-28 12t-28-12l-88-88H200q-17 0-28.5-11.5T160-280v-124l-88-88q-12-12-12-28t12-28l88-88v-124q0-17 11.5-28.5T200-800h124l88-88q12-12 28-12t28 12l88 88h124q17 0 28.5 11.5T720-760v124l88 88q12 12 12 28t-12 28l-88 88 115 226q7 13 4 25.5T828-132Z"/>
</svg>`,
})
export class MsrfComicBubbleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
