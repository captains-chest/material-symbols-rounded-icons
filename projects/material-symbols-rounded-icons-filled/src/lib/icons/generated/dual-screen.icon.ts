import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-dual-screen-icon',
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
  <path d="M210-182q-23-9-36.5-29T160-256v-544q0-42 35-65.5t75-8.5l238 95q23 9 37.5 29.5T560-704v544q0 42-35 66t-75 8l-240-96Zm430-18v-504q0-67-54-108.5T467-880h253q33 0 56.5 23.5T800-800v520q0 33-23.5 56.5T720-200h-80Z"/>
</svg>`,
})
export class MsrfDualScreenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
