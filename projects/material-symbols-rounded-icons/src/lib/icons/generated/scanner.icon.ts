import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-scanner-icon',
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
  <path d="M704-480 178-670q-16-6-23-21t-1-31q6-16 21-23t31-1l586 214q20 8 34 28t14 44v220q0 33-23.5 56.5T760-160H200q-33 0-56.5-23.5T120-240v-160q0-33 23.5-56.5T200-480h504Zm56 240v-160H200v160h560Zm-320-40h240q17 0 28.5-11.5T720-320q0-17-11.5-28.5T680-360H440q-17 0-28.5 11.5T400-320q0 17 11.5 28.5T440-280Zm-160 0q17 0 28.5-11.5T320-320q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm-80 40v-160 160Z"/>
</svg>`,
})
export class MsrScannerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
