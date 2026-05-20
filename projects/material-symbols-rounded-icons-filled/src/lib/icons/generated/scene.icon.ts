import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-scene-icon',
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
  <path d="M800-80v-600q0-33-23.5-56.5T720-760h-40v52q0 12-8 20t-20 8H428q-14 0-22.5-15t-1.5-29l76-164q7-15 20.5-23.5T532-920h92q24 0 40 18t16 42v20h40q66 0 113 47t47 113v600h-80Zm-600 0q-51 0-85.5-34.5T80-200v-100q0-25 17.5-42.5T140-360q25 0 42.5 17.5T200-300v100h400v-100q0-25 17.5-42.5T660-360q25 0 42.5 17.5T720-300v100q0 51-34.5 85.5T600-80H200Zm40-160v-60q0-32-21-61t-59-37v-82q0-33 23.5-56.5T240-560h320q33 0 56.5 23.5T640-480v82q-38 8-59 37t-21 61v60H240Z"/>
</svg>`,
})
export class MsrfSceneIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
