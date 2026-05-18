import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-subdirectory-arrow-left-icon',
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
  <path d="m313-320 115 115q12 12 12.5 28T429-149q-12 12-28.5 12T372-149L188-332q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l185-185q12-12 28-11.5t28 12.5q11 12 11.5 28T429-516L313-400h367v-360q0-17 11.5-28.5T720-800q17 0 28.5 11.5T760-760v360q0 33-23.5 56.5T680-320H313Z"/>
</svg>`,
})
export class MsrSubdirectoryArrowLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
