import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-devices-off-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M880-600v305q0 14-7 23t-18 14q-11 5-22 2.5T812-267L584-490q-11-11-17.5-26.5T560-548v-52q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600ZM600-160q-17 0-28.5-11.5T560-200v-88L240-608v328h180q25 0 42.5 17.5T480-220q0 25-17.5 42.5T420-160H140q-25 0-42.5-17.5T80-220q0-25 17.5-42.5T140-280h20v-408l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76h-88Zm200-560H360q-20 0-30-12.5T320-760q0-15 10-27.5t30-12.5h440q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720Z"/>
</svg>`,
})
export class MsrfDevicesOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
