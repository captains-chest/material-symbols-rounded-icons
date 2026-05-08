import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-format-strikethrough-icon',
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
  <path d="M120-400q-17 0-28.5-11.5T80-440q0-17 11.5-28.5T120-480h720q17 0 28.5 11.5T880-440q0 17-11.5 28.5T840-400H120Zm300-160v-120H260q-25 0-42.5-17.5T200-740q0-25 17.5-42.5T260-800h440q25 0 42.5 17.5T760-740q0 25-17.5 42.5T700-680H540v120H420Zm0 240h120v100q0 25-17.5 42.5T480-160q-25 0-42.5-17.5T420-220v-100Z"/>
</svg>`,
})
export class MsrFormatStrikethroughIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
