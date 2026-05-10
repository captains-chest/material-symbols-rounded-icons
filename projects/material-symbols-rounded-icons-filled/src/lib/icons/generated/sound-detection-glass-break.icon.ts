import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-sound-detection-glass-break-icon',
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
  <path d="M120-320v-440q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v2L540-421 437-524q-12-12-27-18t-30-6q-16 0-30.5 6T323-524L120-320Zm80 200q-33 0-56.5-23.5T120-200l260-261 100 100q12 12 27 17.5t30 5.5q17 0 32-6t27-20l244-274v438q0 33-23.5 56.5T760-120H200Z"/>
</svg>`,
})
export class MsrfSoundDetectionGlassBreakIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
