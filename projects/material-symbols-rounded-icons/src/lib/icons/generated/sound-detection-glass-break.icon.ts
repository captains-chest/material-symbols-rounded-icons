import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sound-detection-glass-break-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm180-428q15 0 30 6t27 18l103 103 220-247v-92H200v360l123-124q12-12 26.5-18t30.5-6Zm157 210q-15 0-30-5.5T480-361L380-461 200-280v80h560v-348L596-364q-12 14-27 20t-32 6Z"/>
</svg>`,
})
export class MsrSoundDetectionGlassBreakIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
