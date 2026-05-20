import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-wall-lamp-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-120q-17 0-28.5-11.5T120-160v-160q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v160q0 17-11.5 28.5T160-120Zm120-80q-17 0-28.5-11.5T240-240q0-17 11.5-28.5T280-280h160q17 0 28.5-11.5T480-320v-120H280q-20 0-32-15.5t-6-35.5l96-320q4-13 14-21t24-8h288q14 0 24 8t14 21l96 320q6 20-6 35.5T760-440H560v120q0 50-35 85t-85 35H280Z"/>
</svg>`,
})
export class MsrfWallLampIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
