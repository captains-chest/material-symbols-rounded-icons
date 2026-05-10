import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signal-cellular-0-bar-icon',
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
  <path d="M177-80q-27 0-37.5-24.5T148-148l664-664q19-19 43.5-8.5T880-783v643q0 25-17.5 42.5T820-80H177Zm96-80h527v-526L273-160Z"/>
</svg>`,
})
export class MsrfSignalCellular0BarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
