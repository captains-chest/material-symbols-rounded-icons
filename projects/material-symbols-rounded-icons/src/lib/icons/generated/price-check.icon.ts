import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-price-check-icon',
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
  <path d="m558-233 198-198q11-11 28-11t28 11q11 11 11 28t-11 28L586-149q-12 12-28 12t-28-12L416-263q-11-11-11-28t11-28q11-11 28-11t28 11l86 86ZM260-401h-60q-17 0-28.5-11.5T160-441q0-17 11.5-28.5T200-481h160v-80H200q-17 0-28.5-11.5T160-601v-160q0-17 11.5-28.5T200-801h60q0-17 11.5-28.5T300-841q17 0 28.5 11.5T340-801h60q17 0 28.5 11.5T440-761q0 17-11.5 28.5T400-721H240v80h160q17 0 28.5 11.5T440-601v160q0 17-11.5 28.5T400-401h-60q0 17-11.5 28.5T300-361q-17 0-28.5-11.5T260-401Z"/>
</svg>`,
})
export class MsrPriceCheckIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
