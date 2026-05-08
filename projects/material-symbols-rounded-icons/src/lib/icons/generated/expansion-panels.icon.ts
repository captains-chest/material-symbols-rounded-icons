import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-expansion-panels-icon',
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
  <path d="m480-354-75-75q-12-12-28-12t-28 12q-12 12-12 28.5t12 28.5l103 104q12 12 28 12t28-12l104-104q12-12 12-28.5T612-429q-12-12-28.5-12T555-429l-75 75Zm0-252 75 75q12 12 28 12t28-12q12-12 12-28.5T611-588L508-692q-12-12-28-12t-28 12L348-588q-12 12-11.5 28t12.5 28q12 12 28.5 12t28.5-12l74-74ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
</svg>`,
})
export class MsrExpansionPanelsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
