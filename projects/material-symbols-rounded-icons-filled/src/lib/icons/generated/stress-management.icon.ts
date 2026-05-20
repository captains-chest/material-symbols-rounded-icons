import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stress-management-icon',
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
  <path d="M480-320q68 0 151-27t249-95v-15q0-51-41-82t-90-17q-17 5-34.5 12T668-526q-61 26-103 36t-85 10q-45 0-87-10.5T287-527q-24-10-41.5-16.5T212-555q-49-16-90.5 15T80-457v13q131 60 230 92t170 32Zm0 240q138 0 242.5-75.5T864-349q-131 56-220 82.5T480-240q-76 0-173.5-28.5T94-350q34 123 137 196.5T480-80Zm0-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
</svg>`,
})
export class MsrfStressManagementIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
