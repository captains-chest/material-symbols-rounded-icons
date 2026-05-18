import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-shelves-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-40q-17 0-28.5-11.5T120-80v-800q0-17 11.5-28.5T160-920q17 0 28.5 11.5T200-880v40h560v-40q0-17 11.5-28.5T800-920q17 0 28.5 11.5T840-880v800q0 17-11.5 28.5T800-40q-17 0-28.5-11.5T760-80v-40H200v40q0 17-11.5 28.5T160-40Zm40-480h80v-120q0-17 11.5-28.5T320-680h160q17 0 28.5 11.5T520-640v120h240v-240H200v240Zm0 320h240v-120q0-17 11.5-28.5T480-360h160q17 0 28.5 11.5T680-320v120h80v-240H200v240Zm160-320h80v-80h-80v80Zm160 320h80v-80h-80v80ZM360-520h80-80Zm160 320h80-80Z"/>
</svg>`,
})
export class MsrShelvesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
