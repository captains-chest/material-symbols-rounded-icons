import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-text-select-move-back-character-icon',
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
  <path d="M480-120q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm-160 0q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm-160 0q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200q17 0 28.5 11.5T200-160q0 17-11.5 28.5T160-120Zm320-640q-17 0-28.5-11.5T440-800q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760Zm-160 0q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760Zm-160 0q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800q0 17-11.5 28.5T160-760Zm480 640q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h40v-560h-40q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h160q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760h-40v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H640ZM273-440l36 36q11 11 11 27.5T308-348q-11 11-28 11t-28-11L148-452q-12-12-12-28t12-28l104-104q11-11 27.5-11.5T308-612q11 11 11 28t-11 28l-35 36h247q17 0 28.5 11.5T560-480q0 17-11.5 28.5T520-440H273Z"/>
</svg>`,
})
export class MsrfTextSelectMoveBackCharacterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
