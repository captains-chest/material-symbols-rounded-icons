import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-location-city-icon',
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
  <path d="M120-200v-400q0-33 23.5-56.5T200-680h160v-47q0-16 6-30.5t17-25.5l40-40q23-23 57-23t57 23l40 40q11 11 17 25.5t6 30.5v207h160q33 0 56.5 23.5T840-440v240q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200Zm80 0h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/>
</svg>`,
})
export class MsrLocationCityIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
