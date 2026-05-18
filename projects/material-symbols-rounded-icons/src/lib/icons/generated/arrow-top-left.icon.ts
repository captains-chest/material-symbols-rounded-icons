import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-arrow-top-left-icon',
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
  <path d="m313-560 116 116q12 12 11.5 28T429-388q-12 12-28 12.5T373-387L188-572q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l183-183q12-12 28.5-12t28.5 12q12 12 12 28t-12 28L313-640h367q33 0 56.5 23.5T760-560v360q0 17-11.5 28.5T720-160q-17 0-28.5-11.5T680-200v-360H313Z"/>
</svg>`,
})
export class MsrArrowTopLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
