import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-fit-page-height-icon',
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
  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm480-80v-640H240v640h480Zm0-640H240h480ZM408-600h144q14 0 19-12t-5-22l-58-58q-12-12-28-12t-28 12l-58 58q-10 10-5 22t19 12Zm100 332 58-58q10-10 5-22t-19-12H408q-14 0-19 12t5 22l58 58q12 12 28 12t28-12Z"/>
</svg>`,
})
export class MsrFitPageHeightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
